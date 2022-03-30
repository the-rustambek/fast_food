import { NavLink } from "react-router-dom";
import "./Category.css";

const Category = () => {
return (
<section className="category">
    <div className="container">
        <ul className="nested-links">
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/">
                    Lavash</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact
                    to="/desert">Desert</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/set">
                    Set</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/xaggi">
                    Xaggi</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact
                    to="/burger">Burger</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/pizza">
                    Pizza</NavLink>
                    </li>
                    <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact
                    to="/sendvich">Sendvich</NavLink>
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/donar">
                    Donar</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/xot-dog">
                    Xot-Dog</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/free">
                    Free</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/drink">
                    Drink</NavLink>       
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/salad">
                    Salad</NavLink>
                    
            </li>
               <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/bread">
                    Bread</NavLink>

                    
            </li>
            <li className="nested-links__item">
                <NavLink className="nested-links__link" activeClassName="nested-links__link-active" exact to="/sauce">
                Sauce</NavLink>

                    
            </li>
         
        </ul>
    </div>

</section>
)
}

export default Category;