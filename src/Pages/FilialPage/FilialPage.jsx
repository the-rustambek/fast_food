import "./FilialPage.css";
import { useContext } from "react";
import filialData from "../../Assets/Data/Data";
import { Context } from "../../Context/OrderFoods";

import { useParams } from "react-router-dom";
import FilialContent from "../../Components/FilialContent/FilialContent";
const FilialPage =() =>{
    const  {dishtype} = useParams();
    const {filialData, setFilialData} = useContext(Context);
return (
<section className="filial">
    <div className="container">
        
        {
                     filialData.filter((filial)=>{ 
                         if(dishtype){
                             return filial.type===dishtype;
                         }
                         return filial.type === "hot-dishes"
                     }).map((filial)=>(
                         <FilialContent title={filial.title} key={filial.id}
                         date={filial.date} location={filial.location} 
                          
                          onClick={(e) => 
                            {
                                const foundFilial = filialData.find(
                                  (manzil) => manzil.id === filial.id
                                );
                                foundFilial.count = foundFilial.count ? 
                                foundFilial.count + 1 : 1;
                                const uniqueArr = [
                                  ...new Set([...orderFoods,foundFilial])
                                ]
                                // console.log(foundFilial)
                                setFilialData(uniqueArr)
                                // (window.localStorage.getItem("orderFoods",JSON.stringify(setOrderFoods))) 
                                // console.log(orderFoods)
                            } } 
                            /> 
                     ))
                 }
    </div>

</section>
)
}

export default FilialPage;