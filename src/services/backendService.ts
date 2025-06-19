export type RegisterPayload = {
    nome: string;
    email: string;
    password: string;
  };
  
  const API_URL = "http://localhost:3000"; // substitui pela real
  
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
  
    return await response.json();
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
  
export async function getExerciciosDoDia(alunoId: string, data?: string) {
  const query = data ? `?data=${data}` : "";
  const response = await fetch(`http://localhost:3000/api/exercicios-dia/${alunoId}${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar exercícios do dia");
  }

  const json = await response.json();
  return json.data.exercicios;
}

export async function getDetalheExercicio(treinoExercicioId: string) {
  const response = await fetch(`http://localhost:3000/api/exercicios-dia/detalhe/${treinoExercicioId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar detalhes do exercício");
  }

  const json = await response.json();
  return json.data;
}

export async function getPlanoDoAluno() {
  const response = await fetch("http://localhost:3000/api/planos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar plano de treinamento");
  }

  const json = await response.json();
  return json.data;
}

export async function getQuestsDoAluno() {
  const response = await fetch("http://localhost:3000/api/quests", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar as quests do aluno");
  }

  const json = await response.json();
  return json.quests;
}