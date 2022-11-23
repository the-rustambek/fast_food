import "./FilialPage.css";

import FilialContent from "../../Components/FilialContent/FilialContent";
import { Link } from "react-router-dom";
const FilialPage =() =>{
return (
<section className="filial">
    <div className="container">
        <ul className="filial-list">
            <li className="filial-item">
                <Link className="filial-link" to="/filialCard">
                <div className="filial-left">
                    <h3 className="filial-title">
                        MaxWay Magic City
                    </h3>
                    <p className="filial-text">
                        Magic City,ул. Бабура, 174, Ташкент, Узбекистан
                    </p>
                </div>
                <div className="filial-right">
                    <p className="filial-subtext">
                        Часы работы
                    </p>
                    <p className="filial-text">
                        10:00-03:00
                    </p>
                </div>
                </Link>
            </li>
            <li className="filial-item">
                <Link className="filial-link" to="/filialCard">
                <div className="filial-left">
                    <h3 className="filial-title">
                        MaxWay Tashkent City
                    </h3>
                    <p className="filial-text">
                        Magic City, Navoiy, 26, Ташкент, Узбекистан
                    </p>
                </div>
                <div className="filial-right">
                    <p className="filial-subtext">
                        Часы работы
                    </p>
                    <p className="filial-text">
                        10:00-03:00
                    </p>
                </div>
                </Link>
            </li>
            <li className="filial-item">
                <Link className="filial-link" to="/filialCard">
                <div className="filial-left">
                    <h3 className="filial-title">
                        MaxWay Chilanzar City
                    </h3>
                    <p className="filial-text">
                        Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан
                    </p>
                </div>
                <div className="filial-right">
                    <p className="filial-subtext">
                        Часы работы
                    </p>
                    <p className="filial-text">
                        10:00-03:00
                    </p>
                </div>
                </Link>
            </li>
        </ul>
    </div>

</section>
)
}

export default FilialPage;