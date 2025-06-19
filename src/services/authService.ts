const USUARIO_KEY = "usuarioLogado";

export function getUsuarioLogado() {
  const dados = localStorage.getItem(USUARIO_KEY);
  if (!dados) return null;

  try {
    return JSON.parse(dados);
  } catch (err) {
    console.error("Erro ao parsear dados do usuário:", err);
    return null;
  }
}

export function setUsuarioLogado(usuario: any) {
  localStorage.setItem(USUARIO_KEY, JSON.stringify(usuario));
}

export function limparSessao() {
  localStorage.removeItem(USUARIO_KEY);
}