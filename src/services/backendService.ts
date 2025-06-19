import { getTokenJWT } from "./authService";

export type RegisterPayload = {
    nome: string;
    email: string;
    password: string;
    display_name: string;
    image_url: string;
  };
  
  const API_URL = 'http://localhost:3000';
  
export async function registerUser(data: RegisterPayload) {
    console.log('Dados que vão para o back: ', data)
    const response = await fetch(`${API_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Erro no cadastro");
    }
  
    const result = await response.json();
    console.log('Dados recebidos do registro:', result);
    return result;
}
  
export async function loginUser(data: { email: string; password: string }) {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao fazer login");
    }
  const result = await response.json();
  
    localStorage.setItem("usuarioLogado", JSON.stringify(result));
    return result;
}
  
export async function getExerciciosDoDia() {
  const token = getTokenJWT();
  if (!token) throw new Error("Usuário não autenticado");
  const response = await fetch(`http://localhost:3000/api/aluno/exercicios`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar exercícios do dia");
  }

  const json = await response.json();
  return json;
}

export async function getDetalheExercicio(treinoExercicioId: string) {
  const token = getTokenJWT();
  if (!token) throw new Error("Usuário não autenticado");
  const response = await fetch(`http://localhost:3000/api/aluno/exercicios/${treinoExercicioId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar detalhes do exercício");
  }

  const json = await response.json();
  return json;
}

export async function getPlanoDoAluno() {
  const token = getTokenJWT();
  if (!token) throw new Error("Usuário não autenticado");
  const response = await fetch("http://localhost:3000/api/aluno/planos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar plano de treinamento");
  }

  const json = await response.json();
  return json;
}

export async function getQuestsDoAluno() {
  const token = getTokenJWT();
  if (!token) throw new Error("Usuário não autenticado");
  const response = await fetch("http://localhost:3000/api/aluno/quests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar as quests do aluno");
  }

  const json = await response.json();
  return json.quests;
}