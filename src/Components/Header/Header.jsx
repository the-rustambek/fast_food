import "./Header.css";
import {BsCart3} from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";


const Header =() =>{
return (
<header className="header">
    <div className="container">

        <div className="header-left">
            <button className="menu-btn">
                <IoMenu />
            </button>
            <Link to="/" className="logo-link">
                SFood
            </Link>
            <ul className="header-list">
                <li className="header-item">
                    <Link to="/" className="header-link">
                        Главная
                    </Link>
                </li>
                <li className="header-item">
                    <Link to="/filial" className="header-link">
                        Филиалы
                    </Link>
                </li>
                <li className="header-item">
                    <Link to="/about" className="header-link">
                        О нас
                    </Link>
                </li>
                <li className="header-item">
                    <Link to="/contact" className="header-link">
                    Контакты
                    </Link>
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