import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/";
import {useState} from "react";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    const items = ['a', 'a', 'c'];
    return(
        <>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
            <Button color={'danger'} onClick={() => setAlertVisibility(true)}> my Button </Button>
            <ListGroup items={items} heading={'List'}/>
        </>
        )
}

export default App;
