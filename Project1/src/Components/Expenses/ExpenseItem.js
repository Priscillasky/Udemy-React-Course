import  React ,{ useState } from 'react'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './Expenses.css';
import ExpenseForm from '../../NewExpense/ExpenseForm';
import './ExpenseItem.css';

const ExpenseItem = (props) =>{
    const [title, setTitle ] = useState(props.title);
    console.log('Expense Item evaluated by react')
    const Clickfunction=()=>{
        setTitle('Updated');
        console.log(title);

    }
    return (
        <li>
    <Card className='expense-item'>
   
        <ExpenseDate {...props}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button onClick = {Clickfunction} className=''>Change title</button>
    </Card>
    </li>
    )
    
}

export default ExpenseItem;