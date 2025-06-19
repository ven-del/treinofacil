import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState, useEffect } from "react";
import { getDetalheExercicio } from "../../services/backendService";


const exercisesData = {
  "1": {
    id: "1",
    name: "Agachamento",
    series: 3,
    repetitions: 15,
    restTime: 1,
    weight: 20,
    completed: true,
    image: "/assets/images/card_aluno_1.png",
    instructions:
      "Posicione os pés na largura dos ombros, com as pontas ligeiramente para fora. Mantenha o peito ereto e flexione as pernas. Levante enquanto mantém a posição correta.",
    notes: "",
  },
  "2": {
    id: "2",
    name: "Rosca direta",
    series: 3,
    repetitions: 15,
    restTime: 1,
    weight: 15,
    completed: false,
    image: "/assets/agachamento-demo.jpg",
    instructions:
      "Segure a barra com as mãos na largura dos ombros. Mantenha os cotovelos próximos ao corpo e flexione os braços levantando a barra até o peito.",
    notes: "",
  },
  "3": {
    id: "3",
    name: "Rosca alternada",
    series: 3,
    repetitions: 15,
    restTime: 1,
    weight: 12,
    completed: false,
    image: "/assets/agachamento-demo.jpg",
    instructions:
      "Segure um halter em cada mão. Alterne o movimento de flexão dos braços, mantendo o controle durante todo o movimento.",
    notes: "",
  },
  "4": {
    id: "4",
    name: "Leg press",
    series: 4,
    repetitions: 12,
    restTime: 2,
    weight: 80,
    completed: false,
    image: "/assets/agachamento-demo.jpg",
    instructions:
      "Posicione-se no aparelho com os pés na largura dos ombros. Desça controladamente e empurre a plataforma de volta à posição inicial.",
    notes: "",
  },
  "5": {
    id: "5",
    name: "Extensão de pernas",
    series: 3,
    repetitions: 20,
    restTime: 1,
    weight: 25,
    completed: false,
    image: "/assets/agachamento-demo.jpg",
    instructions:
      "Sente-se no aparelho e posicione as pernas sob o apoio. Estenda as pernas controladamente e retorne à posição inicial.",
    notes: "",
  },
  "6": {
    id: "6",
    name: "Tríceps Barrinha",
    series: 3,
    repetitions: 20,
    restTime: 1,
    weight: 25,
    completed: false,
    image: "/assets/triceps-barrinha-demo.jpg",
    instructions:
    "Imagine uma descrição muito detalhada de como pegar o tríceps barrinha e fazer as repetições da forma ideal e mais efetiva possível",
    notes: "",
  },
};

const ExerciseDetails = () => {
  usePageTitle();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [weight, setWeight] = useState(exercise?.weight ?? 20);
  const [notes, setNotes] = useState(exercise?.notes ?? "");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (!id) throw new Error("ID inválido");
        const detalhe = await getDetalheExercicio(id);
        setExercise(detalhe);
      } catch (err) {
        console.error("Erro ao carregar detalhes do exercício:", err);
        setExercise(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Exercício não encontrado</div>
      </div>
    );
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className=" flex-1 justify-center items center p-6 overflow-y-auto w-[85%] h-[95%] border rounded-xl border-gray-200 drop-shadow-xl mx-auto bg-gray-50">
      <div className="p-8 ">
        <div className="flex items-center justify-end mb-8">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar para a lista</span>
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Exercício: {exercise.exercicio.nome}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <img
              src="#"
              alt={`Demonstração do exercício ${exercise.name}`}
              className="w-200 h-100 rounded-xl"
            />

            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instruções:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {exercise.configuracao.observacoes_professor}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Detalhes do Exercício
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Séries:</span>
                  <span className="font-semibold text-gray-900">
                    {exercise.configuracao.series}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Repetições:</span>
                  <span className="font-semibold text-gray-900">
                    {exercise.configuracao.repeticoes}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Descanso:</span>
                  <span className="font-semibold text-gray-900">
                    {exercise.restTime} min
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Carga (kg):</span>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center font-medium"
                  />
                </div>
              </div>
            </div>

            {exercise.completed && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Exercício concluído
                </h3>
                <p className="text-green-600">Bom trabalho!</p>
              </div>
            )}

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Anotações:
              </h3>
              <textarea
                value={exercise.configuracao.observacoes_aluno}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Adicione suas anotações sobre este exercício..."
                className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
