import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  function exit() {
    localStorage.removeItem("@t-alpha:token");
    navigate("/");
  }

  return (
    <header className="header">
      <h1>Lista de produtos</h1>

      <button onClick={exit}>Sair</button>
    </header>
  );
};
