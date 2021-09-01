import { useState } from 'react';
import './CreateExpenseForm.css';

function CreateExpenseForm(props)
{

const [enteredTitle, setEnteredTitle] = useState('');

const titleChangeHandler=(event)=>
{
    setEnteredTitle(event.target.value);
};

const [enteredAmount, setEnteredAmount] = useState('');

const amountChangeHandler=(event)=>
{
    setEnteredAmount(event.target.value);
};

const [enteredExpenseDate, setEnteredExpenseDate] = useState('');

const expenseDateChangeHandler=(event)=>
{
    setEnteredExpenseDate(event.target.value);
};

const submitHandler=(event)=>
{
event.preventDefault();

const data={
title:enteredTitle,
amount:enteredAmount,
date:new Date(enteredExpenseDate)
};
console.log(data);

props.onSaveExpenseData(data);

setEnteredTitle('');
setEnteredAmount('');
setEnteredExpenseDate('');
};


return(
    
    <form onSubmit={submitHandler}>
        <div className="create_expense_form_controls">
         <div className="create_expense_form_control">
             <label>Title</label>
             <input type="text" 
             value={enteredTitle}
             onChange={titleChangeHandler}/>
         </div>
         <div className="create_expense_form_control">
             <label>Amount</label>
             <input type="number" 
             value={enteredAmount}
             min="0.01" step="0.01" onChange={amountChangeHandler}/>
         </div>
         <div className="create_expense_form_control">
             <label>Date</label>
             <input type="date" 
             value={enteredExpenseDate}
             min="2010-01-01" max="2025-12-31" onChange={expenseDateChangeHandler}/>
         </div>
         
        </div>
        <div className="create_expense_form_actions">
             
             <button type="submit">Add Expense</button>
         </div>
    </form>
    
);
}

export default CreateExpenseForm;