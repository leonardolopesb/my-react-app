import { useNavigate } from "react-router-dom";
import '../css/Dashboard.css';

export const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>This is the dashboard page.</p>

      <button className="dashboard-button" onClick={() => navigate("/")}>
        Ir para a página principal
      </button> 
    </div>
  );
};
