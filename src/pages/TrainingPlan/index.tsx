import { getPlanoDoAluno } from "../../services/backendService";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface TrainingFocus {
  id: string;
  label: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface WeeklySchedule {
  [key: string]: {
    day: string;
    training: string;
    color: string;
  };
}



const TrainingPlan = () => {
  usePageTitle();
  const [loading, setLoading] = useState(true);
  const [plano, setPlano] = useState<any | null>(null);

  const trainingFocus: TrainingFocus[] = [
    {
      id: "muscle_mass",
      label: "Massa muscular",
      icon: <img src="/assets/icons/icone-massa-muscular.svg" className="w-6 h-6" />,
      completed: true,
    },
    {
      id: "muscle_core",
      label: "Músculos Core",
      icon: <img src="/assets/icons/icone-musculos-core.svg" className="w-6 h-6" />,
      completed: true,
    },
    {
      id: "resistance",
      label: "Resistência",
      icon: <img src="/assets/icons/icone-resistencia.svg" className="w-6 h-6" />,
      completed: true,
    },
    {
      id: "weight_loss",
      label: "Perda de Peso",
      icon: <img src="/assets/icons/icone-perda-de-peso.svg" className="w-6 h-6" />,
      completed: true,
    },
  ];

  const weeklySchedule: WeeklySchedule = {
    seg: { day: "Seg", training: "A", color: "bg-blue-200 text-blue-800" },
    ter: { day: "Ter", training: "B", color: "bg-green-200 text-green-800" },
    qua: { day: "Qua", training: "B", color: "bg-green-200 text-green-800" },
    qui: { day: "Qui", training: "C", color: "bg-purple-200 text-purple-800" },
    sex: { day: "Sex", training: "C", color: "bg-purple-200 text-purple-800" },
    sab: { day: "Sab", training: "A", color: "bg-blue-200 text-blue-800" },
    dom: {
      day: "Dom",
      training: "Descanso",
      color: "bg-gray-200 text-gray-600 w-fit px-3",
    },
  };


  useEffect(() => {
    const fetchPlano = async () => {
      try {
        const planoData = await getPlanoDoAluno();
        setPlano(planoData[0] || null);
      } catch (error) {
        console.error("Erro ao buscar plano de treinamento:", error);
        setPlano(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlano();
  }, []);

  if (loading) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  if (!plano) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Não há planos para este usuário</div>
      </div>
    );
  }

    return (
      <div className="flex-1 justify-center items center p-6 overflow-y-auto w-[85%] h-[95%] border rounded-xl border-gray-200 drop-shadow-xl mx-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-(--color-primary) text-center mb-5">
          {plano.nome}
        </h1>
        {/* Foco do treino */}
        <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Foco do treino:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trainingFocus.map((focus) => (
              <div
                key={focus.id}
                className="flex items-center space-x-3 bg-gray-100 w-fit px-3"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full">
                  {focus.icon}
                </div>
                <span className="text-gray-700 font-medium">{focus.label}</span>
                {focus.completed && (
                  <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quadro de treinos */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quadro de treinos
          </h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid grid-cols-8 divide-x divide-gray-200">
              {/* Cabeçalho da divisão semanal */}
              <div className="bg-gray-50 p-4 text-center flex flex-col justify-center">
                <div className="text-sm text-gray-600 font-medium">Divisão</div>
                <div className="text-sm text-gray-600 font-medium">Semanal</div>
              </div>

              {/* Dias da semana */}
              {Object.values(weeklySchedule).map((schedule, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 p-2 text-sm text-gray-600 font-medium border-b border-gray-200">
                    {schedule.day}
                  </div>
                  <div className="p-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg font-bold text-lg ${schedule.color}`}
                    >
                      {schedule.training}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Descrição dos treinos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plano.treinos.map((treino: any) => (
            <div
              key={treino.id}
              className="bg-white border-2 border-gray-200 rounded-lg p-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {treino.nome}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {treino.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default TrainingPlan;