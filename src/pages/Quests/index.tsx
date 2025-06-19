import { usePageTitle } from "../../hooks/usePageTitle";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestsDoAluno } from "../../services/backendService";
import { Check, ChevronRight } from "lucide-react";

interface Quest {
  id: string;
  titulo: string;
  descricao: string;
  status: string;
}


const Quests = () => {
  usePageTitle();
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarQuests() {
      try {
        const dados = await getQuestsDoAluno();
        setQuests(dados);
      } catch (err) {
        console.error("Erro ao carregar quests:", err);
        setQuests([]);
      } finally {
        setLoading(false);
      }
    }

    carregarQuests();
  }, []);

  // const toggleQuestCompletion = (
  //   questId: string,
  //   event: React.MouseEvent
  // ) => {
  //   event.stopPropagation();
  //   setQuests((prevQuests) =>
  //     prevQuests.map((quest) =>
  //       quest.id === questId
  //         ? { ...quest, completed: !quest.completed }
  //         : quest
  //     )
  //   );
  // };

  const handleCardClick = (questId: string, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".checkbox-container")) {
      return;
    }
    navigate(`/app/quests/${questId}`);
  };

  if (loading) {
    return (
      <div className="h-full bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!quests.length) {
    return (
      <div className="bg-gray-100 flex items-center justify-center h-full">
        <div className="text-gray-500">Nenhuma quest encontrada</div>
      </div>
    );
  }
  return (
    <div className="relative overflow-y-auto">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-(--title-color) mb-2">
              Suas Quests
            </h2>
          </div>
          <div className="space-y-4">
            {quests.map((quest) => (
              <div
                key={quest.id}
                className={`bg-gray-100 rounded-xl p-6 shadow-sm border border-gray-200 flex items-center justify-between hover:shadow-md transition-all duration-500 cursor-pointer relative`}
                onClick={(event) => handleCardClick(quest.id, event)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className="checkbox-container"
                  >
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer ${
                        quest.status === 'completed'
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300"
                      }`}
                    >
                      {quest.status && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-(--title-color) mb-2">
                      {quest.titulo}
                    </h4>
                    <p className="text-(--text-color) mb-1">{quest.descricao}</p>
                    <span className="text-sm text-(--text-color) font-medium">
                      Recompensa: ainda a definir
                    </span>
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
}
 
export default Quests;