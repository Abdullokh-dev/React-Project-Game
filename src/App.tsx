import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
    const items = ['USA', 'Russia', 'Ukraine']
    return(
        <>
            <ListGroup items={items} heading={"Cities"} onSelectItem={'handle'}/>
            <Alert>
                Abdulloh
            </Alert>
        </>
        )
}

export default App;
