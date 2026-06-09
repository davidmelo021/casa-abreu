import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string | null;
  nome: string | null;
  isLogado: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [nome, setNome] = useState<string | null>(null);

  const isLogado = !!token;

  async function login(email: string, senha: string) {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message);
    }

    const data = await response.json();
    setToken(data.token);
    setNome(data.nome);
  }

  function logout() {
    setToken(null);
    setNome(null);
  }

  return (
    <AuthContext.Provider value={{ token, nome, isLogado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}