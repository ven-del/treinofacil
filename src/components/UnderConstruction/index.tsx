const UnderConstruction = () => {
    return (
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl text-(--title-color) font-bold">Calma lá!</h1>
        <img
          src="/assets/images/under-construction.jpg"
          alt="Pica-Pau em manutenção"
          className="w-[50%] h-[50%]"
        />
        <p className="text-lg text-(--text-color)">
          Esta página ainda está em construção. Volte depois que terminarmos o
          serviço.
        </p>
      </div>
    );
}
 
export default UnderConstruction;