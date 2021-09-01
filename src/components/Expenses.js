import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import React, { useState } from 'react';

function Expenses(props)
{
    const myExpenses=props.myExpenses;
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.myExpenses.filter((expense) => {
        return expense.expenseDate.getFullYear().toString() === filteredYear;
      });

      let expensesContent = <p>No expenses found.</p>;

      if(filteredExpenses.length>0)
      {
        expensesContent= filteredExpenses.map(expense=>{
            return <ExpenseItem 
            key={expense.id}
            expenseName={expense.expenseName} expenseAmount={expense.expenseAmount}
            expenseDate={expense.expenseDate}/>
        });
      }

    // props.myExpenses.map(expense=>{
    //     console.log(expense);
    // });

return(
    <div className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}

</div>
);
}
export default Expenses;