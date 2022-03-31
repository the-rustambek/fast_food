import "./Header.css";
import {BsCart3} from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";

const Header =() =>{
    let [count, setCount] = useState(1);
    

    function incrementCount() {
        count = count + 1;
        setCount(count);
      }
      function decrementCount() {
          if(count<=0){
              count=1
          }
        count = count - 1;
        setCount(count);
      }

const [korzinkaModal, setKorzinkaModal] = useState(false);
const [deleteKorzinkaModal,setDeleteKorzinkaModal] =
 useState(false);

function openKorzinkaModal(){
setKorzinkaModal(!korzinkaModal);
}
function openDeleteKorzinkaModal(){
    setDeleteKorzinkaModal(!deleteKorzinkaModal)
    }

return (
<header className="header">
    <div className="container">

        <div className="header-left">
            <button className="menu-btn">
                <IoMenu />
            </button>
            <Link to="/" className="logo-link">
            SFood
            </Link>
            <ul className="header-list">
                <li className="header-item">
                    <NavLink activeClassName="header-item--active" to="/" className="header-link" exact>
                        Главная
                    </NavLink>
                </li>
                <li className="header-item">
                    <NavLink activeClassName="header-item--active" to="/filial" className="header-link">
                        Филиалы
                    </NavLink>
                </li>
                <li className="header-item">
                    <NavLink activeClassName="header-item--active" to="/about" className="header-link">
                        О нас
                    </NavLink>
                </li>
                <li className="header-item">
                    <NavLink activeClassName="header-item--active" to="/contact" className="header-link">
                        Контакты
                    </NavLink>
                </li>

            </ul>
        </div>

        <div className="header-right">
            <button className="basket-btn" onClick={()=>openKorzinkaModal()}>
                <BsCart3 />
                <p>2</p>
            </button>

            <button className="login-btn">
                Войти
            </button>
        </div>

        <Modal className="modal" show={korzinkaModal} w={800} mh={400}>
            <button className="close-btn" onClick={()=>setKorzinkaModal()}>
                <IoCloseOutline />
            </button>

     <div className="modal-box">
         <ul className="modal-list">
             <li className="modal-item"> 
                 <img className="modal-img"src="https://cdn.delever.uz/delever/d4db4b28-c365-47ca-8509-0557473f4880" /> 
                <p className="modal-title">
                Spicy seasoned se dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, cum!
                </p>
         <div className="modal-blok">
             <button className="modal-minus" onClick={decrementCount}> 
                 -
             </button>
             <span className="modal-count" >
             {count}
             </span>
             <button className="modal-plus" onClick={incrementCount}>
                 +
             </button>
         </div>
                <p className="modal-price">
                    589 000  сум
                </p>
                <button className="modal-btn" onClick={()=>{
                                        openDeleteKorzinkaModal()

                                    }}>
                    <RiDeleteBinLine />
                </button>
             </li>
     
           

         </ul>
     </div>
        </Modal>
    </div>

</header>
)
}

export default Header;