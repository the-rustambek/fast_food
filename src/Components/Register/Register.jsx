import { Link } from "react-router-dom";
import "../Login/Login.css";

const Register = ()=>{
return (
<div className="login">
    <h2 className="login-title">
    Регистрация
    </h2>
    <p className="login-text">
        Войдите с вашим номером телефона
    </p>
    <form className="login-form" method="POST">
        <input className="form-input" type="text"placeholder="Имя" name="name" required  min="3" />
        <input className="form-input" type="tel" placeholder="Номер телефона" name="phone" required  min="3" />
        <button className="login-btn register-btn">
        Регистрация
        </button>
    </form>
    <span className="login-span register-span">
        <p>
        У вас есть аккаунта?
        </p>
        <Link className="login-link" to="/login">
        Войти
        </Link>
    </span>
</div>
)
}



export default Register;