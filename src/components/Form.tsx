import {FormEvent} from "react";

function Form() {
    const myFunc = (event: FormEvent) => {
        event.preventDefault()
        console.log('a')
    }
    return (
        <>
            <form onSubmit={myFunc}>
                <div className="mb-3 px-5">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id='name' type="text" className="form-control"/>
                </div>

                <div className="mb-3 px-5">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input id='age' type="number" className="form-control"/>
                </div>

                <button type={"submit"} className={'btn btn-primary mx-5'}> Submit </button>
            </form>
        </>
    )
}

export default Form;
