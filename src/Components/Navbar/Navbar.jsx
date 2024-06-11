import "./Navbar.css"
import logo from "../assets/logo.png"
import cart from "../assets/cart_icon.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
  return (
    <div className="navbar">
        <div className="nav-logo">
        <Link to='/'><img src={logo} alt="logo" /></Link>
        <Link to='/'><p>KHALID</p></Link>
        </div>
        <ul className="nav-menu">
            <li onClick={() =>setMenu("shop")}><Link style={{textDecoration: 'non'}} to='/'>Shop</Link>{menu === "shop" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("men")}><Link style={{textDecoration: 'non'}} to='/mens'>Men</Link>{menu === "men" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("womens")}><Link style={{textDecoration: 'non'}} to='/womens'>Women</Link>{menu === "womens" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("kids")}><Link style={{textDecoration: 'non'}} to='/kids'>Kids</Link>{menu === "kids" ? <hr/> :<></>}</li>
            <li onClick={() =>setMenu("contact")}><Link style={{textDecoration: 'non'}} to='/contact'>Contacts</Link>{menu === "contact" ? <hr/> :<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="cart" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar