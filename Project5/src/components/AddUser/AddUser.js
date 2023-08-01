
import {useState,useRef } from 'react'
import Card from '../UI/Card'
import Button from'../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'
import classes from './addUser.module.css';

const AddUser = (props) =>{
    const nameInputRef=useRef()
    const AgeInputRef=useRef()
    
    const[error,setError] = useState()

const addUserHandler = (event) =>{
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const ageEntered = AgeInputRef.current.value;
    if(enteredName.trim().length === 0 || ageEntered.trim().length ===0){
        setError({
            title:'invalid input',
            message:'Please enter valid username',
        })
        return;
    }
    if(+ageEntered < 1){
        setError({
            title:'invalid input',
            message:'Please enter valid age > 0',
        })
        return;
    }
    props.onAddUser(enteredName, ageEntered);
    //not advisable to use .
    nameInputRef.current.value = '';
    AgeInputRef.current.value = '';
}


const errorHandler = (event) =>{
    setError(null)
}
    return (
        <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className = {classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor = "username">Username</label>
            <input 
            type = 'text'
             id = "username"
              
              ref={nameInputRef}
              ></input>    
            <label htmlFor="age">Age(Years)</label>
            <input
             id = "age" 
             type = 'Number' 
             
             ref={AgeInputRef}
             ></input>
            <Button type = 'submit'>Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )

}
export default AddUser;