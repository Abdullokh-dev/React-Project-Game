import {FormEvent, useState} from "react";

function Form() {
    const [person, setPerson] = useState({
        name: '',
        age: ''
    })

    const myFunc = (event: FormEvent) => {
        event.preventDefault()

        console.log(person)
    }
    return (
        <>
            <form onSubmit={myFunc}>
                <div className="mb-3 px-5">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        onChange={(event) =>
                           setPerson({...person, name: event.target.value})
                         }
                        value={person.name}
                        id='name'
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="mb-3 px-5">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                        onChange={(event) =>
                            setPerson({...person, age: event.target.value})
                        }
                        value={person.age}
                        id='age'
                        type="number"
                        className="form-control"/>
                </div>

                <button type={"submit"} className={'btn btn-primary mx-5'}> Submit </button>
            </form>
        </>
    )
}

export default Form;
