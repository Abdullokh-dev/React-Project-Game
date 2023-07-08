function ListGroup() {
    const items = ['a', 'b', 'c',]
    if (items.length === 0) {
        return <p>No item found</p>
    }
    return (
        <>
            <ul className="list-group">
                {items.map(item =>
                    <li key={item} className="list-group-item">{item}</li>
                )}
            </ul>
        </>
    )
}

export default ListGroup;
