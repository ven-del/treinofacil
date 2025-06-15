const StudentSection = () => {
  const cardInfo = [
    {
      title: "Visualização de exercícios",
      description:
        "Edite pesos, repetições, adicione notas e visualize guias visuais para cada exercício.",
      image: "/assets/images/card_aluno_1.png",
    },
    {
      title: "Planejamento de Treinos",
      description:
        "Veja seus treinos, seus objetivos e seu progresso de forma clara.",
      image: "/assets/images/card_aluno_2.png",
    },
    {
      title: "Planejamento Alimentar",
      description:
        "Tenha seu plano alimentar integrado ao app e acompanhe junto.",
      image: "/assets/images/card_aluno_3.png",
    },
    {
      title: "Acompanhamento de Treinos",
      description:
        "Veja seus treinos, seus objetivos e seu progresso de forma clara.",
      image: "/assets/images/card_aluno_4.png",
    },
  ];
  return (
    <div className="bg-[#F3FAFF] p-6">
      <h1 className="text-[#3B82F6] font-bold text-4xl text-center mb-6">
        Para Alunos
      </h1>

      <div className="flex flex-wrap justify-center gap-10 w-full mb-10">
        {cardInfo.map((card, index) => (
          <div
            key={index}
            className="card w-fit duration-300 ease-in-out hover:-translate-y-3"
          >
            <img src={card.image} alt={card.title} />
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

export default StudentSection;