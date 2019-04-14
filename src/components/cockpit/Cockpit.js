import React, { useEffect } from 'react';

import './Cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('Cockpit.js useEffect hook');

    // Http Request....
    setTimeout(() => {
      alert('Saved data to the cloud!');
    }, 1000);

    return () => {
      console.log('Cockpit.js useEffect, component removed from DOM');
    }
  }, []);

  console.log('Cockpit.js component');
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = 'red';
  }
  if (props.persons.length <= 2) {
    assignedClasses.push('red'); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className={'cockpit'}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
}
export default cockpit;
