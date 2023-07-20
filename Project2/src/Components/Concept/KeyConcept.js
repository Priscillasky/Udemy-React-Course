import React from 'react'
import Card from '../../UI/Card';

const KeyConcept = (props) => {
  return (
    
    
    <Card className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </Card>
 
   
  )
}

export default KeyConcept