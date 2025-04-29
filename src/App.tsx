import SendButton from "./components/send-button/send-button"
import CardFuncionalidade from "./components/card-funcionalidade/card-funcionalidade"


function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 h-screen bg-gradient-to-r from-amber-200 to-amber-500">
      <h1 className="text-3xl font-bold underline text-orange-700">Hello World Laranja!</h1>
      <p className="text-5xl font-semibold line-through text-blue-700">Texto estilizado com tailwind</p>
      <SendButton />
      <CardFuncionalidade />
      </div>

    </>
  )
}
export default App