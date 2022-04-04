import "../../Pages/FilialCardPage/FilialCardPage.css";

const FilialCard = () =>{
    return(
        <section className="filial-box">
            <div className="filial-left">
                <h2 className="filial-name">
                MaxWay Magic City
                </h2>
                <p className="filial-map">
                Адрес: Magic City,ул. Бабура, 174, Ташкент, Узбекистан
                </p>
                <p className="filial-time">
                Часы работы: 10:00-03:00
                </p>
                <span className="filial-span">
<p>Номер телефона:</p>
<a className="filial-links" href="tel:+998931487733">+998 93 148 77 33</a>
                </span>
                <p className="filial-orientr">
                Ориентир: Magic City
                </p>

                <img src="https://maxway.uz/images/Rectangle/max-way.png" alt="" className="filial-thumb" />
            </div>
            <div className="filial-right">
           <iframe className="filial-iframe" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1" allowfullscreen="true" ></iframe>
            </div>
        </section>
    )
}
export default FilialCard;