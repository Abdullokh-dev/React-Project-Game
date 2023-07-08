function ListGroup() {
    const items = ['a', 'b', 'c',]
    // Event handler
    const handle = (event: MouseEvent) => console.log(event)

    return (
        <>
            <h1>List</h1>
            { items.length === 0 && <p>No item found</p> }
            <ul className="list-group">
                {items.map(item =>
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={handle}
                    >
                        {item}
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListGroup;
