import "./Footer.css"
import { FaInstagram, FaTelegramPlane, FaYoutube} from "react-icons/fa";

const Footer = () =>{
return(
<footer className="footer">
    <div className="container">
        <div className="footer-top">

            <ul className="footer-list">
                <a href="#" className="logo-links logo-brand">
                    SFood
                </a>
                <li className="footer-item">
                    <a href="#" className="footer-link footer-links">
                        Главная
                    </a>
                </li>
                <li className="footer-item">
                    <a href="#" className="footer-link">
                        Филиалы
                    </a>
                </li>
                <li className="footer-item">
                    <a href="#" className="footer-link">
                        О нас
                    </a>
                </li>
                <li className="footer-item">
                    <a href="#" className="footer-link">
                        Контакты

                    </a>
                </li>
            </ul>

            <ul className="footer-list">
                <h2 className="footer-title">
                    Присоединяйтесь к нам
                </h2>
                <li className="footer-item">
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <FaTelegramPlane /> </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <FaInstagram /> </a>
                        </li>
                        <li className="social-item">
                            <a href="#" className="social-link">
                                <FaYoutube /> </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="footer-list">
                <h2 className="footer-title">
                    Заказывайте по номеру
                </h2>
                <li className="footer-item">
                    <a href="tel:+998931487733" className="footer-link">+998931487733</a>
                </li>
            </ul>


        </div>

        <div className="footer-bottom">
            <p className="footer-left">
                © 2020–2022, ООО «IT-TIME», официальный сайт
            </p>
            <a href="https://t.me/the_rustambek" className="developed-link">
                Developed by Rustambek
            </a>
        </div>
    </div>

</footer>
)
}

export default Footer;