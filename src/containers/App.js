import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/Persons';
import Cockpit from '../components/cockpit/Cockpit';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import withClass from '../components/hoc/withClass';
import Aux from '../components/hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);

    console.log('App.js constructor');
  }
  state = {
    persons: [
      { id: 'a;dfjasf', name: 'Max', age: 28 },
      { id: 'a;lsdjfas', name: 'Hani', age: 29 },
      { id: 'ldsakjfl;ak', name: 'Roni', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps: ', state, props);
    return state;
  }
  // componentWillMount(){
  //   console.log('App.js componentWillMount');
  // }

  componentDidMount() {
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate ', );
    return true;
  }

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    // below line is equal to say:
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('App.js render() method');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
          {this.state.showCockpit? <Cockpit
            appTitle={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null }
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, 'app');
