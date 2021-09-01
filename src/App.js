import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import React, { useState } from 'react';


function App() {
  
  const dummyExpenses=[
    // {expenseDate:new Date(2021,8,12),expenseName:'Rent',expenseAmount:123},
    // {expenseDate:new Date(2021,8,15),expenseName:'Groceries',expenseAmount:456},
    // {expenseDate:new Date(2021,8,18),expenseName:'Phone Bill',expenseAmount:789}
    ];

  const [myExpenses, setMyExpenses] = useState(dummyExpenses);
  //setMyExpenses(dummyExpenses);

  const addExpenseClickHandler=(expenseItem)=>
  {
    const tempExpenseItem={
      expenseDate:expenseItem.date,
      expenseName:expenseItem.title,
      expenseAmount:expenseItem.amount,
      id:Math.random()
    };

   // setMyExpenses([tempExpenseItem]);
    
    setMyExpenses(prevState=>
      {
        return [tempExpenseItem, ...prevState];
      });
    
    console.log("In addExpenseClickHandler");
    console.log(tempExpenseItem);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseClickHandler}></NewExpense>
      <Expenses myExpenses={myExpenses}></Expenses>
    </div>
  );
}

export default App;




