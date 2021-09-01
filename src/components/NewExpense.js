import React from 'react';
import CreateExpenseForm from './CreateExpenseForm';
import './NewExpense.css';

function NewExpense(props)
{
    const saveExpenseDataHandler = (enteredExpenseData)=>
    {
        const expenseData=
        {
        ...enteredExpenseData,
        id: Math.random().toString()
        };

        console.log("Data " + expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
        <CreateExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>          
        </div>
    );
}

export default NewExpense; 