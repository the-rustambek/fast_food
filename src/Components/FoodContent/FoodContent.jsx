import { useContext } from "react";
import foods from "../../Assets/Data/Data";
import { Context } from "../../Context/OrderFoods";
import FoodCard from "../FoodCard/FoodCard";
import "./FoodContent.css";
import { useParams } from "react-router-dom";

const FoodContent = () =>{
    const  {dishtype} = useParams();
    const {orderFoods, setOrderFoods} = useContext(Context);
   
     return (
         <section className="foods">
             <div className="container">
                 {
                     foods.filter((food)=>{ 
                         if(dishtype){
                             return food.type===dishtype;
                         }
                         return food.type === "hot-dishes"
                     }).map((food)=>(
                         <FoodCard img={food.img} key={food.id}
                         title={food.title} price={food.price} 
                         available={food.available}  
                          onClick={(e) => 
                            {
                                const foundFood = foods.find(
                                  (ovqat) => ovqat.id === food.id
                                );
                                foundFood.count = foundFood.count ? 
                                foundFood.count + 1 : 1;
                                const uniqueArr = [
                                  ...new Set([...orderFoods,foundFood])
                                ]
                                // console.log(foundFood)
                                setOrderFoods(uniqueArr)
                                // (window.localStorage.getItem("orderFoods",JSON.stringify(setOrderFoods))) 
                                // console.log(orderFoods)
                            } } 
                            /> 
                     ))
                 }
                 {/* <ul className="foods-list">
                     <li className="foods-item">
                         <img src="https://cdn.delever.uz/delever/d4db4b28-
                         c365-47ca-8509-0557473f4880" alt="" className="foods-img" />
                     </li>
                     <li className="foods-item">
                         <h3 className="foods-title">
                         Макси бокс "Ретро"
                         </h3>
                     </li>
                     <li className="foods-item">
                         <p className="foods-text">
                         Информация: лаваш мясной classic, картофель-фри, пеп...
                         </p>
                     </li>
                     <li className="foods-item">
                         <span>
                             35 000 сум
                         </span>
                         <button className="foods-btn">
                         Заказать
                         </button>
                     </li>
                 </ul>
                 <ul className="foods-list">
                     <li className="foods-item">
                         <img src="https://cdn.delever.uz/delever/463f704a-a4df-4696-b7f6-29f1f35c5eb8" alt="" className="foods-img" />
                     </li>
                     <li className="foods-item">
                         <h3 className="foods-title">
                         Макси бокс "Ретро"
                         </h3>
                     </li>
                     <li className="foods-item">
                         <p className="foods-text">
                         Информация: лаваш мясной classic, картофель-фри, пеп...
                         </p>
                     </li>
                     <li className="foods-item">
                         <span>
                             35 000 сум
                         </span>
                         <button className="foods-btn">
                         Заказать
                         </button>
                     </li>
                 </ul>
                 <ul className="foods-list">
                     <li className="foods-item">
                         <img src="https://cdn.delever.uz/delever/a0ddf8db-27de-42c3-a420-adfc37847a4c" alt="" className="foods-img" />
                     </li>
                     <li className="foods-item">
                         <h3 className="foods-title">
                         Макси бокс "Ретро"
                         </h3>
                     </li>
                     <li className="foods-item">
                         <p className="foods-text">
                         Информация: лаваш мясной classic, картофель-фри, пеп...
                         </p>
                     </li>
                     <li className="foods-item">
                         <span>
                             35 000 сум
                         </span>
                         <button className="foods-btn">
                         Заказать
                         </button>
                     </li>
                 </ul> */}

             </div>
         </section>
     )
}

export default FoodContent;