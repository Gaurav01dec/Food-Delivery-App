// import logoImg from "../assets/logo.jpg"
import { useContext, useState } from "react"
import logoImg from "../assets/logo_mamaji.png"
import Button from "./UI/Button"
import CartContext from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext"

export default function Header() {

    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx.items.length) // we can use this for cart updation on every cllick buthis will return 1 if there are n number of quantity of each item , we have to store cart quantity as item quantity

    const totalCartItemss  = cartCtx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems + item.quantity;
    },0)

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return (
        <header id="main-header" className="sticky-header">
            <div id="title">
                <img src={logoImg} alt="A Restaurant"/>
                <h1>MAMA JI BURGER&trade;</h1>
            </div>
            <nav>
                <Button textOnly={true} onClick={handleShowCart}>Cart ({totalCartItemss})</Button>
            </nav>
        </header>
    )
};
