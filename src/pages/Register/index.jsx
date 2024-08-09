import { Link } from "react-router-dom";
import { RegisterForm } from "../../components/forms/RegisterForm";

export const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <div>
        <RegisterForm />
      </div>
      <div>
        <Link to="/">Ja tenho conta</Link>
      </div>
    </div>
  );
};
