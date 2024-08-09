import { Link } from "react-router-dom";
import { LoginForm } from "../../components/forms/LoginForm";

export const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <div>
        <LoginForm />
      </div>
      <div>
        <Link to="/register">Criar conta</Link>
      </div>
    </div>
  );
};
