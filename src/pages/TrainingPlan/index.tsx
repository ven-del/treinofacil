import { usePageTitle } from "../../hooks/usePageTitle";

const TrainingPlan = () => {
  usePageTitle();
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Oi, eu sou o Plano de Treino!</h1>
      </div>
    );
}
 
export default TrainingPlan;