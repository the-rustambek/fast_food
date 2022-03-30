import Category from "../../Components/Category/Category";
import FoodContent from "../../Components/FoodContent/FoodContent";
import Foods from "../../Components/FoodCard/FoodCard";
import SwiperFood from "../../Components/Swiper/Swiper";
import "./HomePage.css"
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
const HomePage =() =>{
    return (
        <>
        <SwiperFood />
        <Category />
        <Switch>
                
                <Route path="/:dishtype">
                    <FoodContent />
                </Route>
                <Route path="/" exact>
                    <FoodContent />
                </Route>
                  </Switch>
        
        </>
    )
}


export default HomePage;