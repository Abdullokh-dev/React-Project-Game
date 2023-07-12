import ExpenseList from "./expense-tracker/components/ExpenseList";
import {useState} from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bb', amount: 10, category: 'Utilities'},
        {id: 3, description: 'cc', amount: 10, category: 'Utilities'},
        {id: 4, description: 'dd', amount: 10, category: 'Utilities'},
    ])

    const [selectedCategory, setSelectedCategory] = useState("")

    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

    if(expenses.length === 0)
        return null

    return (
        <>
            <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
            <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
        </>
    )
}

export default App;
