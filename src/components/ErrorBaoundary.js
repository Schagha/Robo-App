import { render } from '@testing-library/react';
import React from 'react'
import { Component } from 'react'

class ErrorBaoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        hasError: false
    }
  }
   componentDidCatch(error, info) {
    this.setState({ hasError: true })
   }

   render() {
    if (this.state.hasError) {
        return <h1>oops. That is not good</h1>
    }
    return this.props.children
   }  
}

export default ErrorBaoundary;

