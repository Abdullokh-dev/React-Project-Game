import {FormEvent, useRef} from "react";

function Form() {
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {name: '', age: 0}

    const myFunc = (event: FormEvent) => {
        event.preventDefault()
        if (nameRef !== null)
            person.name = nameRef.current.value;

        if (ageRef !== null)
            person.age = parseInt(ageRef.current.value);

        console.log(person)
    }
    return (
        <>
            <form onSubmit={myFunc}>
                <div className="mb-3 px-5">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} id='name' type="text" className="form-control"/>
                </div>

                <div className="mb-3 px-5">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input ref={ageRef} id='age' type="number" className="form-control"/>
                </div>

                <button type={"submit"} className={'btn btn-primary mx-5'}> Submit </button>
            </form>
        </>
    )
}

export default Form;
