import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider ({ children }) {
    const [items, setItems] = useState([])
    const [headerVal, setHeaderVal] = useState(false)

    const addToCart = ((f_name, l_name, item, price, color, sizevalue) => {
        setItems((preState) => [...preState, {f_name, l_name, item, price, color, sizevalue}])
    })

    const addToHeader = ((hamBtn) => {
        setHeaderVal(hamBtn)
    })
    return(
        <CartContext.Provider value={{ items, addToCart, headerVal, addToHeader }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext;