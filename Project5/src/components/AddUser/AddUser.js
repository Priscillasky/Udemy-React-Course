
import {useState } from 'react'
import Card from '../UI/Card'
import Button from'../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import classes from './addUser.module.css';

const AddUser = (props) =>{
    const[enteredUsername,setEnteredUsername] = useState('')
    const[enteredAge,setEnteredAge] = useState('')
    const[error,setError] = useState()

const addUserHandler = (event) =>{
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
        setError({
            title:'invalid input',
            message:'Please enter valid username',
        })
        return;
    }
    if(+enteredAge < 1){
        setError({
            title:'invalid input',
            message:'Please enter valid age > 0',
        })
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
}
const usernameChangedHandler = (event) =>{
    setEnteredUsername(event.target.value)
}

const ageChangedHandler = (event) =>{
    setEnteredAge(event.target.value)
}

const errorHandler = (event) =>{
    setError(null)
}
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className = {classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor = "username">Username</label>
            <input type = 'text' id = "username" value={enteredUsername} onChange= {usernameChangedHandler}></input>    
            <label htmlFor="age">Age(Years)</label>
            <input id = "age" type = 'Number' value = {enteredAge} onChange = {ageChangedHandler}></input>
            <Button type = 'submit'>Add User</Button>
        </form>
        </Card>
        </div>
    )

}
export default AddUser;