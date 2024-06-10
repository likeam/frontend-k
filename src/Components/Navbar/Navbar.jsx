import "./Navbar.css"
import logo from "../assets/logo.png"
import cart from "../assets/cart_icon.png"
import { useState } from "react"

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>KHALID</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() =>setMenu("shop")}>Shop{menu === "shop" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("men")}>Men{menu === "men" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("womens")}>Women{menu === "womens" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("kids")}>Kids{menu === "kids" ? <hr/> :<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="cart" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar