import { useNavigate } from "react-router-dom";
import '../css/LoginPage.css';
import { useState } from "react";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Tentativa de login:", { email, password });
    alert("Login realizado com sucesso!");

    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>LoginPage</h1>

      <div>
        <form>
          <span>
            Email
          </span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu email" />

          <span>
            Senha
          </span>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite sua senha" />

          <button className="login-button" type="button" onClick={handleLogin}>Entrar</button>
        </form>
      </div>
    </div>
  );
};
