export type RegisterPayload = {
    nomeCompleto: string;
    nomeExibicao?: string;
    email: string;
    senha: string;
  };
  
  const API_URL = "mudar a api aqui"; // substitui pela real
  
  export async function registerUser(data: RegisterPayload) {
    const response = await fetch(`${API_URL}/register`, {
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
  
export async function loginUser(data: { email: string; senha: string }) {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao fazer login");
    }
  
    const result = await response.json();
    return result; // geralmente token ou dados do usuário
  }