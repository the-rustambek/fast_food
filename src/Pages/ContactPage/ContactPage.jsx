import "./ContactPage.css";

const ContactPage = ()=>{
     return (
         <section className="contact">
             <div className="container">
                <div className="contact-top">
                    <h3 className="contact-title">
                    Телефоны контактных центров
                    </h3>
                    <p className="contact-text">
                    Круглосуточно, без выходных
                    </p>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <p>
                            Ташкент
                            </p>
                            <a href="tel:+998931487733" className="contact-tel">
                            +998931487733
                            </a>
                        </li>
                        <li className="contact-item">
                            <p>
                            Наманган
                            </p>
                            <a href="tel:+998993253304" className="contact-tel">
                            +998993253304
                            </a>
                        </li>
                        <li className="contact-item">
                            <p>
                            Алмалык
                            </p>
                            <a href="tel:+998931487733" className="contact-tel">
                            +998931487777
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact-middle">
                    <h3 className="contact-title">
                    Отдел поддержки клиентов
                    </h3>
                    <ul className="contact-list">
                    <li className="contact-item">
                            <p>
                            Электронная почта
                            </p>
                            <a href="mailto:rustambek0301@gmail.com" 
                            className="contact-email">
                            rustambek0301@gmail.com
                            </a>
                        </li>
                        <li className="contact-item">
                            <p>
                            Контактный телефон
                            </p>
                            <a href="mailto:rustambek0301@gmail.com" 
                            className="contact-email">
                            +998935010770
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact-bottom">
                    <h3 className="contact-title">
                    Правообладателям
                    </h3>
                    <p className="contact-subtext">
                    По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов
                    </p>
                    <div className="contact-blok">
                    <p>
                            Электронная почта
                            </p>
                            <a href="mailto:rustambek0301@gmail.com" 
                            className="contact-email">
                            rustambek0301@gmail.com
                            </a>
                    </div>
                </div>
             </div>
         
         </section>
     )
}

export default ContactPage;