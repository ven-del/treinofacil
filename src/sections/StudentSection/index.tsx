const StudentSection = () => {
  return (
    <div className="bg-[#F3FAFF] p-6">
      <h1 className="text-[#3B82F6] font-bold text-4xl text-center mb-6">
        Para Alunos
      </h1>
      <div className="flex flex-wrap justify-center gap-10 w-full mb-10">
        <div className="card w-fit">
          <img
            src="/assets/images/card_aluno_1.png"
            alt="Imagem gerada por IA de alguém fazendo um agachamento, mostrando passo a passo"
          />
          <h3 className="text-[#60A5FA] font-bold text-xl ml-5">
            Visualização de exercícios
          </h3>
          <p className="text-[#212529] ml-5 mb-3">
            Edite pesos, repetições, adicione notas e visualize guias visuais
            para cada exercício.
          </p>
        </div>
        <div className="card w-fit">
          <img
            src="/assets/images/card_aluno_2.png"
            alt="Imagem gerada por IA de alguém fazendo um agachamento, mostrando passo a passo"
          />
          <h3 className="text-[#60A5FA] font-bold text-xl ml-5">
            Planejamento de Treinos
          </h3>
          <p className="text-[#212529] ml-5 mb-3">
            Veja seus treinos, seus objetivos e seu progresso de forma clara.
          </p>
        </div>
        <div className="card w-[36%]">
          <img
            src="/assets/images/card_aluno_3.png"
            alt="Imagem gerada por IA de alguém fazendo um agachamento, mostrando passo a passo"
            className="h-107 w-full"
          />
          <h3 className="text-[#60A5FA] font-bold text-xl ml-5 w-fit">
            Planejamento Alimentar
          </h3>
          <p className="text-[#212529] ml-5 mb-3 text-wrap w-[90%]">
            Tenha seu plano alimentar integrado à academia ou adicione o
            acompanhamento do seu nutricionista.
          </p>
        </div>
        <div className="card w-fit">
          <img
            src="/assets/images/card_aluno_4.png"
            alt="Imagem gerada por IA de alguém fazendo um agachamento, mostrando passo a passo"
          />
          <h3 className="text-[#60A5FA] font-bold text-xl ml-5">
            Quests de Motivação
          </h3>
          <p className="text-[#212529] ml-5 mb-3">
            Complete missões semanais para manter o foco e evoluir mais rápido.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentSection;
