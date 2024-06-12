// tthis createContext is used to spread data to all the components 
import { createContext, useReducer } from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
})


function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        // update the state to add a meal item
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const updatedItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existingItems = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItems,
                quantity: existingItems.quantity + 1
            }

            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems }

    }
    if (action.type === "REMOVE_ITEM") {
        // remove an item from a state
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingCartItem = state.items[existingCartItemIndex];

        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { ...state, items: updatedItems }
    }

    return state;
}

export function CartContextProvider({ children }) {


    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });


    function addItem(item) {
        dispatchCartAction({ type: "ADD_ITEM", item: item })
    }
    function removeItem(id) {
        dispatchCartAction({ type: "REMOVE_ITEM", item: id })
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    }

    return <CartContext value={cartContext}>{children}</CartContext>
}

export default CartContext;