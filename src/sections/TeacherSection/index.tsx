const TeacherSection = () => {
  const cardInfo = [
    {
      title: "Gerenciamento de Alunos",
      description:
        "Organize seus alunos de maneira simples, veja treinos e resultados em tempo real.",
      image: "/assets/images/card_prof_1.png",
    },
    {
      title: "Planejamento de Treinos",
      description:
        "Crie planos de treino personalizados, organize por tipo de treino e dias da semana.",
      image: "/assets/images/card_prof_2.png",
    },
    {
      title: "Planejamento Alimentar",
      description:
        "Acompanhe ou crie o plano alimentar dos alunos conforme necessidade.",
      image: "/assets/images/card_prof_3.png",
    },
    {
      title: "Criação de Quests",
      description:
        "Incentive seus alunos com missões e desafios que evoluem com o nível de cada um.",
      image: "/assets/images/card_prof_4.png",
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-[#3B82F6] font-bold text-4xl text-center mb-6">
        Para Professores
      </h1>

      <div className="flex flex-wrap justify-center gap-10 w-full mb-10">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="card w-fit duration-300 ease-in-out hover:-translate-y-3"
          >
            <img
              src={card.image}
              alt={card.title}
              className={
                card.image === "/assets/images/card_prof_4.png"
                  ? "object-fill w-full"
                  : ""
              }
            />
            <h3 className="text-[#60A5FA] font-bold text-xl ml-5">
              {card.title}
            </h3>
            <p className="text-[#212529] ml-5 mb-3">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherSection;