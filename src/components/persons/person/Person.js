import React from 'react';

import classes from './Person.css';

const person = ( props ) => {

  // Note: the below block was just for testing ErrorBoundary
  // const randomNum = Math.random();
  // if (randomNum > 0.8) {
  //   throw new Error('Something went wrong');
  // }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
