import React, { Component } from 'react';

import Person from './person/Person';

class persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('Persons.js componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Person.js shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Person.js getSnapshotBeforeUpdate');
    return { message: 'success' };
  }

  // componentWillUpdate() {
  //   console.log('Person.js componentWillUpdate');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons.js componentDidUpdate');
    console.log(snapshot);
  }
  render() {
    return (
        this.props.persons.map((person, index) => {
          console.log('Person.js component');
          return <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          />
      })
    );
  }
}

export default persons;
