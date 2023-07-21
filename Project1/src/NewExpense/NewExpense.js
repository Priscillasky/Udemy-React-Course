import React from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';

const newExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddAddExpense(expenseData);
    }
    return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
    )
}
export default newExpense;