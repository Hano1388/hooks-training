import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasErorr: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    if (this.state.hasErorr) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
