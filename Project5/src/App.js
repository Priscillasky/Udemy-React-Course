import React,{useState} from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';
import './index.css';


function App() {
  const[usersList,setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsersList) =>{
      return [...prevUsersList,{name:uName, age:uAge, id :Math.random().toString()}]
    })
  }
  return (
    <React.Fragment>
    <AddUser onAddUser = {addUserHandler}/>
    <UsersList users = {usersList} />
    </React.Fragment>
  );
}

export default App;
