import { NavLink } from "react-router-dom";
import "./Category.css";
import "../FoodContent/FoodContent.css"

const Category = () => {
return (
<section className="category">
    <div className="container">
        <ul className="nested-links">
            <li className="nested-links__item">
                <NavLink className="nested-links__link"
                 activeClassName="nested-links__link-active" 
                 exact to="/">
                    Lavash</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link"
                 activeClassName="nested-links__link-active"
                  exact
                    to="/desert">Desert</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link"
                 activeClassName="nested-links__link-active" exact to="/cold_dishes">
                    Set</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/appetizer">
                    Xaggi</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact
                    to="/grill">Burger</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/soup">
                    Pizza</NavLink>
                    </li>
                    <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact
                    to="/cold_dishes">Sendvich</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/hot-dishes">
                    Donar</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/grill">
                    Xot-Dog</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/soup">
                    Free</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/hot-dishes">
                    Drink</NavLink>       
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" 
                activeClassName="nested-links__link-active" exact to="/appetizer">
                    Salad</NavLink>
                    
            </li>
               <li className="nested-links__item">
                <NavLink className="nested-links__link"
                 activeClassName="nested-links__link-active" 
                 exact to="/grill">
                    Bread</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link"
                 activeClassName="nested-links__link-active"
                  exact to="/soup">
                Sauce</NavLink>

                    
            </li>
         
        </ul>
    </div>

</section>
)
}

export default Category;