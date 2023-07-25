import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesChart from './ExpenseChart';

import './Expenses.css';

import ExpensesList from './ExpensesList';

import ExpensesFilter from './ExpensesFilter';
const Expenses = (props) =>{
    const [filteredYear,setFilteredYear] = useState('2020');
    
    let filterInfoText = '2019,2021 & 2022';
    
        if (filteredYear === '2019'){
            filterInfoText = '2020, 2021 & 2022';
        }else if (filteredYear=== '2020'){
            filterInfoText = '2019, 2021 & 2022';
        }else {
            filterInfoText = '2019, 2020 & 2021';
        }

    const filterchangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
        console.log('Expenses.js')
        
    }

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
return (
   <div>
    <Card className='expenses'>
    
    <ExpensesFilter 
     selected = {filteredYear} 
     onChangeFilter = {filterchangeHandler} 
     />
     {/*{props.items.map((expense)=>(
        <ExpenseItem 
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
        />
     ))}*/}
     <ExpensesChart  expenses = {filteredExpenses}/>
     
     <ExpensesList  items = {filteredExpenses}/>
    </Card>
    </div>
)
}
export default Expenses;