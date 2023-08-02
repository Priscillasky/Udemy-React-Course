import React, { useState,useEffect,useReducer,useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../context/auth-context';

//Reducer Function for email
const emailReducer = (state,action) =>{
  if(action.type === 'USER_INPUT'){
    return {value:action.val, isValid:action.val.includes('@')};
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value, isValid:action.val.includes('@')};
  }
  return {value:'', isValid:false};
};

const passwordReducer =(state,action) =>{
  if(action.type === 'USER_INFO'){
    return {value:action.val, isValid:action.val.trim().length > 6}
  }
  if(action.type === 'USER_OFF'){
    return {value:state.value, isValid:action.val.trim().length > 6}
  }
  return {
    value:'',
    isValid:false
  }
}

const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //UseReducer parameters 
   const[emailCheck, dispatchEmail]=useReducer(emailReducer, {
    value :'', 
    isValid:null
  });

   const[passwordCheck, dispatchPassword] = useReducer(passwordReducer, {
    value:'',
    isValid:null,
   })

   const authCtx = useContext(AuthContext)

useEffect (()=>{
  console.log('Running')

  return () =>{
    console.log('Clean')
  }
})
const {isValid:emailIsValid} = emailCheck;
const {isValid:passwordIsValid} = passwordCheck;

  useEffect(()=>{
    const identifier = setTimeout(()=>{
     setFormIsValid(
      emailIsValid && passwordIsValid
     )
    },500)
   return () =>{
    console.log('CLEAN UP')
    clearTimeout(identifier);
   } //cleanup function
  },[emailCheck, passwordCheck]);

  const emailChangeHandler = (event) => {
   dispatchEmail({type:'USER_INPUT',val:event.target.value });
    //setFormIsValid(
     // event.target.value.includes('@') && passwordCheck.isValid
    //);

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INFO',val:event.target.value})
    //setEnteredPassword(event.target.value);

   // setFormIsValid(
      //emailCheck.value.isValid  && event.target.value.trim().length > 6
    //);

  };

  const validateEmailHandler = (event) => {
    dispatchEmail({type:'INPUT_BLUR',val: event.target.value})
    //setEmailIsValid(emailCheck.isValid);
  };

  const validatePasswordHandler = (event) => {
    dispatchPassword({type:'INPUT_OFF',val: event.target.value})
    //setPasswordIsValid(passwordCheck.value.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailCheck.value, passwordCheck.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailCheck.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailCheck.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordCheck.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordCheck.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
