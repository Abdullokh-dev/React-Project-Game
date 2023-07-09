import {useState} from "react";

function App() {
    const [customer, setCustomer] = useState({
        name: 'ABU',
        address: {
            city: 'UZB',
            zipCode: 150501
        }
    });

    const handleClick = () => {
        setCustomer({
            ...customer,
            address: {...customer.address, city: 'USA'}})
    }
    return (
        <>
            {customer.address.city}
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default App;
