
import "../FoodContent/FoodContent.css";

const FoodCard =({id,img,title,price,available
  ,onClick}) =>{
  return(
    <ul className="foods-list"   key={id}>
    <li className="foods-item">
        <img src={img} alt="" className="foods-img" />
    </li>
    <li className="foods-item">
        <h3 className="foods-title">
        {title}
        </h3>
    </li>
    <li className="foods-item">
        <p className="foods-text">
        Информация: лаваш мясной classic, картофель-фри, пеп
        </p>
    </li>
    <li className="foods-item">
        <span>
            {price} сум
        </span>
        <button className="foods-btn" onClick={onClick}>
        Заказать
        </button>
    </li>
</ul>
  )
}
export default FoodCard;