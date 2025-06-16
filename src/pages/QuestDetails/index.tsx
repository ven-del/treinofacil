import { usePageTitle } from "../../hooks/usePageTitle";

const QuestDetails = () => {
  usePageTitle();
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Oi, eu sou os Detalhes da Quest!</h1>
      </div>
    );
}
 
export default QuestDetails;