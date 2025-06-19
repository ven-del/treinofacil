import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getExerciciosDoDia } from "../../services/backendService";
import { getUsuarioLogado } from "../../services/authService";
import { Check, ChevronRight } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  series: number;
  repetitions: number;
  restTime: number;
  completed: boolean;
}

interface WorkoutData {
  title: string;
  date: string;
  category: string;
  exercises: Exercise[];
}

const Dashboard = () => {
  const [workoutData, setWorkoutData] = useState<WorkoutData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const carregarExercicios = async () => {
      try {
        const usuario = getUsuarioLogado();
        if (!usuario || !usuario.id) throw new Error("Usuário não logado");

        const hoje = new Date().toISOString().split("T")[0];
        const dados = await getExerciciosDoDia(usuario.id, hoje);

        const workoutData: WorkoutData = {
          title: "Seu Treino de Hoje",
          date: hoje.split("-").reverse().join("/"),
          category: "Treino do Dia",
          exercises: dados.map((item: any) => ({
            id: item.treino_exercicio_id,
            name: item.exercicio_nome,
            series: item.series,
            repetitions: item.repeticoes,
            restTime: 1,
            completed: false, 
          })),
        };

        setWorkoutData(workoutData);
      } catch (error) {
        console.error("Erro ao carregar exercícios do dia:", error);
        setWorkoutData(null);
      } finally {
        setLoading(false);
      }
    };

    carregarExercicios();
  }, []);

  const toggleExerciseCompletion = (
    exerciseId: string,
    event: React.MouseEvent
  ) => {
    event.stopPropagation();

    if (!workoutData) return;

    setWorkoutData({
      ...workoutData,
      exercises: workoutData.exercises.map((exercise) =>
        exercise.id === exerciseId
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      ),
    });
  };

  const handleCardClick = (exerciseId: string, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".checkbox-container")) {
      return;
    }

    navigate(`/app/exercicios/${exerciseId}`);

  };

  if (loading) {
    return (
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!workoutData) {
    return (
      <div className=" bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Erro ao carregar dados do treino</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-y-auto">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {workoutData.title}
              </h2>
              <p className="text-orange-500 font-medium">{workoutData.date}</p>
            </div>
            <div className="text-right">
              <h3 className="text-3xl font-bold text-gray-900">
                {workoutData.category}
              </h3>
            </div>
          </div>


          <div className="space-y-4">
            {workoutData.exercises.map((exercise) => (
              <div
                key={exercise.id}
                className={`bg-gray-100 rounded-xl p-6 shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-all duration-500 cursor-pointer relative`}
                onClick={(event) => handleCardClick(exercise.id, event)}
              >
                <div className="flex items-center space-x-4">

                  <div
                    className="checkbox-container"
                    onClick={(event) =>
                      toggleExerciseCompletion(exercise.id, event)
                    }
                  >
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer ${
                        exercise.completed
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {exercise.completed && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>


                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {exercise.name}
                    </h4>
                    <div className="flex items-center space-x-6 text-gray-600">
                      <span>Séries: {exercise.series}</span>
                      <span>Repetições: {exercise.repetitions}</span>
                      <span>Descanso: {exercise.restTime} min</span>
                    </div>
                  </div>
                </div>

                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
