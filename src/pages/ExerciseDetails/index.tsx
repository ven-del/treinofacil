import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useState, useEffect } from "react";
import { getDetalheExercicio } from "../../services/backendService";



const ExerciseDetails = () => {
  usePageTitle();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<any | null>(null);
  const [, setLoading] = useState(true);
  const [weight, setWeight] = useState(exercise?.weight ?? 20);
  const [, setNotes] = useState(exercise?.notes ?? "");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (!id) throw new Error("ID inválido");
        const detalhe = await getDetalheExercicio(id);
        setExercise(detalhe);
      } catch (err) {

        setExercise(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (!exercise) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center">
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
          Exercício: {exercise.nome}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <img
              src="#"
              alt={`Demonstração do exercício ${exercise.nome}`}
              className="w-200 h-100 rounded-xl"
            />

            <div className="bg-white rounded-xl p-6 drop-shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Instruções:
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {exercise.observacoes_professor}
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
                    {exercise.series}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Repetições:</span>
                  <span className="font-semibold text-gray-900">
                    {exercise.repeticoes}
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
                value={exercise.observacoes_aluno}
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
