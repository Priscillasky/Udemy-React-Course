import React from 'react'
import Card from './Card'
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <Card classesName = {classes.modal}>
        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button>Okay</button>
        </footer>
    </Card>
  )
}

export default ErrorModal