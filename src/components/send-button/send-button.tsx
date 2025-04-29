function SendButton() {
  let count = 1
  return (
    <button className="button" onClick={() => {alert(`Botão Clicado ${count} vezes!`), count = count + 1}}>
      Clique aqui
    </button>
  );
}

export default SendButton;