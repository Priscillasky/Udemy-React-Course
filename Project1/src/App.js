import Expenses from "./Components/Expenses/Expenses";
//import ExpenseItem from "./Components/ExpenseItem/ExpenseItem";
import Item from "./Components/Item";
import NewExpense from "./NewExpense/NewExpense";
const App = () =>{
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
    id: 'e2', 
    title: 'New TV', 
    amount: 799.49,
    date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance', 
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  }

  const onSelectNewYear = year =>{
    console.log(year)
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses}  onSelectYear = {onSelectNewYear} />
    </div>
  );
}

export default App;
