import UserProgressContext from "../store/UserProgressContext";
import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Final() {

    const userProgressCtx = useContext(UserProgressContext)

    return (
        <Modal
            className="cart"
            open={userProgressCtx.progress === 'final'}
            onClose={() => userProgressCtx.hideCart()}
        >
            <h2>Your Cart</h2>
            <p>Your order has been placed sucessfully..</p>
            <p>Team "Mama Ji Burger" will contact you soon...</p>
            <p>Thanks..</p>
            <Button onClick={() => userProgressCtx.hideCart()}>Close</Button>
            
        </Modal>
    )
};
