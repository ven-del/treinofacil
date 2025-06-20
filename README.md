# TreinoFacil

## Visão Geral
O frontend `client/` é uma aplicação React criada com Vite para permitir que alunos visualizem e marquem seus exercícios diários.

### Estrutura de Pastas
```
client/
├─ public/           # Arquivos estáticos
├─ src/
│  ├─ components/    # Componentes reutilizáveis (cards, botões, inputs)
│  ├─ pages/         # Páginas (Dashboard, Login, Quests)
│  ├─ services/      # Serviços de API (fetchers do Supabase)
│  ├─ routes/        # Definição de rotas com React Router
│  ├─ hooks/         # Hooks customizados (useAuth, useFetch)
│  ├─ sections/      # Seções da landing page
│  ├─ css/           # Pasta dedicada ao css do projeto
│  ├─ App.tsx        # Componente raiz
│  └─ main.tsx       # Ponto de entrada
└─ vite.config.ts    # Configuração do Vite
```

## Variáveis de Ambiente
No `client/.env` (adicionar no README principal também):
```
VITE_API_URL=https://labce-treinofacil-backend.vercel.app
```

## Scripts Disponíveis
```bash
# Instalar dependências
pm install

# Iniciar modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Servir build localmente
npm run preview
```

## Consumo de API
### Serviço de Autenticação (`services/auth.ts`)
```ts
interface LoginData { email: string; senha: string; }
export async function login(data: LoginData) {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/login`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }
  );
  if (!res.ok) throw new Error('Falha no login');
  const { token } = await res.json();
  localStorage.setItem('token', token);
  return token;
}
```

### Serviço de Exercícios (`services/exercicio.ts`)
```ts
export async function getExerciciosDoDia(date: string) {
  const token = localStorage.getItem('token');
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/aluno/exercicios?data=${date}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error('Erro ao buscar exercícios');
  return res.json();
}
```

## Componentes Principais
- **LoginPage**: formulário de email/senha; chama `login()` e redireciona para `/dashboard`.
- **Dashboard**: usa `useEffect` para chamar `getExerciciosDoDia(today)` e exibir lista; cada item em `ExerciseCard`.
- **ExerciseCard**: exibe nome, série, repetições, ordem; inclui checkbox para `concluirExercicio()`.

## Rotas
Usa **React Router**:
```tsx
<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
  <Route path="*" element={<Navigate to="/login" />} />
</Routes>
```

## Autenticação
- Token JWT armazenado em `localStorage`.
- `Protected` verifica existência de token e redireciona para login se não estiver.

---

