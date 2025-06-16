import { usePageTitle } from "../../hooks/usePageTitle";

const ExerciseDetails = () => {
  usePageTitle();
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Oi, eu sou os Detalhes do Exercício!</h1>
      </div>
    );
}
 
export default ExerciseDetails;