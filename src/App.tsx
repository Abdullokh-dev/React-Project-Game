import ListGroup from "./components/ListGroup";

function App() {
    const items = ['USA', 'Russia', 'Ukraine']
    return <div> <ListGroup items={items} heading={"Cities"}/></div>
}

export default App;
