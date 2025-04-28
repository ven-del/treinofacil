import React from 'react';

function SendButton() {
  return (
    <button className=" bg-amber-200 border-2 rounded-xl self-center p-2 hover:scale-95 hover:cursor-pointer active:scale-90" onClick={() => alert('Botão Clicado!')}>
      Clique aqui
    </button>
  );
}

export default SendButton;