import {useState} from "react";

function App() {
    const [tags, setTags] = useState(['happy', 'cheerful']);

    const handleClick = () => {
        //Add
        setTags([...tags, 'sad'])

        //Remove
        setTags(tags.filter(tag => tag !== 'happy'))

        //Update
        setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag))
    }
    return (
        <>
            {tags}
            <button onClick={handleClick}>click</button>
        </>
    )
}

export default App;
