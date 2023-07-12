import ExpenseList from "./expense-tracker/components/ExpenseList";
import {useState} from "react";

function App() {
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bb', amount: 10, category: 'Utilities'},
        {id: 3, description: 'cc', amount: 10, category: 'Utilities'},
        {id: 4, description: 'dd', amount: 10, category: 'Utilities'},
    ])

    if(expenses.length === 0)
        return null

    return (
        <>
            <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
        </>
    )
}

export default App;
