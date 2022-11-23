import "./Header.css";
import { BsCart3 } from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import { RiDeleteBinLine } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";
import { Context } from "../../Context/OrderFoods";
import Login from "../Login/Login";
import Register from "../Register/Register";

const Header = () => {
    let [count, setCount] = useState(1);
    const { orderFoods, setOrderFoods } = useContext(Context);
    const [loginModal, setLoginModal] = useState(false)
    const [korzinkaModal, setKorzinkaModal] = useState(false);
    const [deleteKorzinkaModal, setDeleteKorzinkaModal] = useState(false);

    function incrementCount() {
        count = (count-0) + 1;
        setCount(count);
    }
    function decrementCount() {
        if (count <= 0) {
            count = 1
        } count = count - 1;
        setCount(count);
    }
    console.log(count,"count")

    function openKorzinkaModal() {
        setKorzinkaModal(!korzinkaModal);
    }
    function openDeleteKorzinkaModal() {
        setDeleteKorzinkaModal(!deleteKorzinkaModal)
    }

    function openLoginModal() {
        setLoginModal(!loginModal);
    }
    const [registerModal, setRegisterModal] = useState(false);
    function openRegisterModal() {
        setRegisterModal(!registerModal)
    }

    console.log(orderFoods ,"orderFoods")
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
                    <button className="basket-btn" onClick={() => openKorzinkaModal()}>
                        <BsCart3 />
                        {orderFoods.length > 0 && (
                            <p><span>{orderFoods.length }</span></p>)}
                    </button>

                    <button className="login-btn"
                        onClick={() => openLoginModal()}>
                        Войти
                    </button>
                </div>

                {/* ******************   korzinkaModal              ******************************* */}

                <Modal className="modal" show={korzinkaModal} w={800}   mh={orderFoods.length>0 ? "400" : "150"}>
                    <button className="close-btn" onClick={() => setKorzinkaModal()}>
                        <IoCloseOutline />
                    </button>
                    <div className="modal-box">
                        {orderFoods.length > 0 ?
                            <ul className="modal-list">
                                {orderFoods.map((food,i) => (
                                    <li key={i} className="modal-item">
                                        <img className="modal-img" alt="dsd" src={food.img} />
                                        <p className="modal-title">
                                            {food.title}
                                        </p>
                                        <div className="modal-blok">
                                            <button className="modal-minus" onClick={decrementCount}>
                                                -
                                            </button>
                                            <span className="modal-count">
                                                {count}
                                            </span>
                                            <button className="modal-plus" onClick={incrementCount}>
                                                +
                                            </button>
                                        </div>
                                        <p className="modal-price">
                                            {(food.price * count).toFixed(1)} сум
                                        </p>
                                        <button className="modal-btn" onClick={() => {
                                            setOrderFoods(orderFoods.filter
                                                (ovqat => ovqat.id !== food.id))
                                        }}>
                                            <RiDeleteBinLine />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            :
                            <div className="modal-context">
                                Siz hali buyurtma qilmadingiz
                            </div>
                        }
                    </div>
                </Modal>


                {/* ******************   loginModal              ******************************* */}

                <Modal className="modal login-modal" show={loginModal} w={400} mh={350}>
                    <button className="close-btn" onClick={() => setLoginModal()}>
                        <IoCloseOutline />
                    </button>
                    <Login />
                </Modal>
                <Modal className="modal login-modal" show={registerModal} w={400} mh={350}>
                    <button className="close-btn"
                        onClick={() => openRegisterModal()}>
                        <IoCloseOutline />
                    </button>
                    <Register />
                </Modal>
            </div>

        </header>
    )
}

export default Header;