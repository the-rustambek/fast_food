import Category from "../../Components/Category/Category";
import Foods from "../../Components/Foods/Foods";
import SwiperFood from "../../Components/Swiper/Swiper";
import "./HomePage.css"
const HomePage =() =>{
    return (
        <>
        <SwiperFood />
        <Category />
        <Foods />
        </>
    )
}


export default HomePage;