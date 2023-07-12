import {categories} from "../../App";

function ExpenseForm() {
    return(
        <form>
            <div className="mb-3">
                <lable htmlFor="description" className="form-label"> Description </lable>
                <input id="description" type="text" className="form-control"/>
            </div>

            <div className="mb-3">
                <lable htmlFor="amount" className="form-label"> Amount </lable>
                <input id="amount" type="number" className="form-control"/>
            </div>

            <div className="mb-3">
                <lable htmlFor="category" className="form-label"> Category </lable>
                <select id="category" className={"form-select"}>
                    {categories.map(category => <option key={category} value={category}> {category} </option>)}
                </select>
            </div>

            <button className={'btn btn-primary'}>Submit</button>
        </form>
    )
}

export default ExpenseForm;
