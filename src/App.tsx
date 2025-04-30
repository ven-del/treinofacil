import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <>
      <Navbar />
      
      <div className="pt-40 ">
        {/* As cores e tamanho das seções são somente para teste, depois serão substituídas por imagens e textos reais. */}
        
      <section id="home" className="h-100 bg-amber-800">
      </section>
      <section id="alunos" className="h-100 bg-amber-700">
      </section>
      <section id="professores" className="h-100 bg-amber-600">
      </section>
      <section id="cadastro" className="h-200 bg-amber-500">
      </section>
      <section id="login" className="h-900 bg-amber-400">
      </section>
      </div>

    </>
  )
}
export default App