import Alert from "./components/Alert";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    return(
        <>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
            <Button color={'danger'} onClick={() => setAlertVisibility(true)}> my Button </Button>
        </>
        )
}

export default App;
