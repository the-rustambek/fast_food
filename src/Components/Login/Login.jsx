import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ()=>{
    const [registerModal,setRegisterModal] = useState(false);
    function openRegisterModal(){
        setRegisterModal(!registerModal)
    }
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
        <button className="login-link reg-link" 
           onClick={() => openRegisterModal(!registerModal)}>
        Регистрация
        </button>
    </span>
</div>
)
}

export default Login;