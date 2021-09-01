

import './ExpenseItem.css';



function ExpenseItem(props) {
    const expenseDate=props.expenseDate;
    const expenseName=props.expenseName;
    const expenseAmount=props.expenseAmount;

    const clickHandler = ()=>
    {
    console.log("Button Clicked!!!");
    };
    

    return (
        <div className="expense-item">
            
            <div className="expense-date">
                
                <div className="expense-date-month">{expenseDate.toLocaleString('en-US',{month:'short'})}</div>
                <div className="expense-date-year">{expenseDate.getFullYear()}</div>
                 <div className="expense-date-day">{expenseDate.toLocaleString('en-US',{day:'2-digit'})}</div>
            </div>
            <div className="expense-item-description">
                <h2>{expenseName}</h2>
                <div className="expense-item-price">${expenseAmount}</div>
            </div>
            
        </div>
    );
}

export default ExpenseItem;

