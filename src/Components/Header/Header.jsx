import "./Header.css";
import {BsCart3} from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";

const Header =() =>{
return (
<header className="header">
    <div className="container">

        <div className="header-left">
            <button className="menu-btn">
                <IoMenu />
            </button>
            <a href="#" className="logo-link">
                SFood
            </a>
            <ul className="header-list">
                <li className="header-item">
                    <a href="#" className="header-link">
                        Главная
                    </a>
                </li>
                <li className="header-item">
                    <a href="#" className="header-link">
                        Филиалы
                    </a>
                </li>
                <li className="header-item">
                    <a href="#" className="header-link">
                        О нас
                    </a>
                </li>
                <li className="header-item">
                    <a href="#" className="header-link">
                        Контакты
                    </a>
                </li>

            </ul>
        </div>

        <div className="header-right">
            <button className="basket-btn">
                <BsCart3 />
<p>2</p>
            </button>
            
            <button className="login-btn">
                Войти
            </button>
        </div>

    </div>

</header>
)
}

export default Header;