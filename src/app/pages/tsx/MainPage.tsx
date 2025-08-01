import { useNavigate } from "react-router-dom";
import '../css/MainPage.css';

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1>Main</h1>
      <p>This is the main page.</p>

      <button className="main-button" onClick={() => navigate("/login")}>Ir para o login</button>
    </div>
  );
} 