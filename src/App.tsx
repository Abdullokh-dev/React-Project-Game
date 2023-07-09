import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const items = ['USA', 'Russia', 'Ukraine']
    return(
        <>
            <ListGroup items={items} heading={"Cities"} onSelectItem={'handle'}/>
            <Alert>Abdulloh</Alert>
            <Button onClick={() => console.log('clicked')}> my Button </Button>
        </>
        )
}

export default App;
