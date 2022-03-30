import "../Foods/Foods.css";

const FoodContent = ({img,title,price,available,onClick}) =>{
     return (
        <ul className="foods-list" onClick={onClick}>
        <li className="foods-item">
            <img src="https://cdn.delever.uz/delever/0dc1cf33-321e-450f-befe-63acc937d642" alt="" className="foods-img" /> 
        </li>
        <li className="foods-item">
            <h3 className="foods-title">
            {title}
            </h3>
        </li>
        <li className="foods-item">
            <p className="foods-text">
            Информация: лаваш мясной classic, картофель-фри, пеп...
            </p>
        </li>
        <li className="foods-item">
            <span>
                {price} сум
            </span>
            <button className="foods-btn">
            Заказать
            </button>
        </li>
    </ul>
     )
}

export default FoodContent;
