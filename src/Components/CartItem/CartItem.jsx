import { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import romoveIcon from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const { all_product, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitem">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>Rs {e.new_price}</p>
                <button className="catitem-quantity">{cartItems[e.id]}</button>
                <p>Rs {e.new_price*cartItems[e.id]}</p>
                <img
                  src={romoveIcon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                  className=""
                />
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItem;
