import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {

    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) =>
        totalPrice + item.quantity * item.price
        , 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    />
                    // <li key={item.id}>
                    //     {item.name} - {item.quantity}
                    // </li>
                )
                )
                }
            </ul>

            {cartCtx.items.length > 0 ? <p className="cart-total">₹{cartTotal}</p> : <p className="cart-total">Empty Cart</p>}
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {/* {cartCtx.items.length > 0 ? <Button onClick={handleCloseCart}>Go to Checkout</Button> : null} */}
                {/* or */}
                {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
            </p>
        </Modal>
    )
};
