import { Link } from "react-router-dom";
import "./Register.css";

const Register =() =>{
    return (
        <section className="register">
            <h3 className="register-title">
            Регистрация
            </h3>
            <form  className="register-form" method="POST">
                <input type="text"placeholder="Имя" name="name" required  min="3" />
                <input type="tel" placeholder="Номер телефона" name="phone" required  min="3" />
                <button type="submit" className="register-btn">

                Регистрация
                </button>
            </form>
            <span className="register-span">
                <p>
                У вас есть аккаунта?
                </p>
                <Link to="/login">
                Войти
                </Link>
            </span>
        
        </section>
    )
}

export default Register;