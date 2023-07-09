import {useState} from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
    const [cartItems, setCartItems] = useState(['item 1', 'Item 2']);
    return (
        <>
            <Navbar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>

        </>
    )
}

export default App;
