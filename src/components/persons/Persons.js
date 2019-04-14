import React, { PureComponent } from 'react';

import Person from './person/Person';

class persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('Persons.js getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('Persons.js componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Person.js shouldComponentUpdate');
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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

  // cleanup disk and component from DOM
  componentWillUnmount() {
    console.log('Persons.js componentWillUnmount');
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
