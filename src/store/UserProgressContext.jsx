import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '', // later it will be 'cart' or 'checkout' in different steps 
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { },
    showFinal: () => { }
})

export function UserProgressContextProvider({ children }) {

    const [userProgress, setUserProgress] = useState('')

    function showCart() {
        setUserProgress('cart')
    }
    function hideCart() {
        setUserProgress('')
    }
    function showCheckout() {
        setUserProgress('checkout')
    }
    function hideCheckout() {
        setUserProgress('')
    }
    function showFinal() {
        setUserProgress('final')
    }

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        showFinal
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
}

export default UserProgressContext;
