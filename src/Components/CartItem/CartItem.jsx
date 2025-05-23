import { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import romoveIcon from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

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
                <p>Rs {e.new_price * cartItems[e.id]}</p>
                <img
                  src={romoveIcon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                  className="cartitem-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>Rs {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promo coede" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
