import { Link } from "react-router-dom";
import "./Login.css";

const Login = ()=>{
return (
<div className="login">
    <h2 className="login-title">
        Добро пожаловать
    </h2>
    <p className="login-text">
        Войдите с вашим номером телефона
    </p>
    <form className="login-form" method="POST">
        <input className="login-input" type="tel" required placeholder="+998931487733" min="3" />
        <button className="login-btn">
            Войти
        </button>
    </form>
    <span className="login-span">
        <p>
        У вас нет аккаунта?
        </p>
        <Link to="/register">
        Регистрация
        </Link>
    </span>
</div>
)
}

export default Login;