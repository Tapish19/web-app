import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}