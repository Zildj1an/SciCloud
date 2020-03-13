/*
 * Example component
 */

import React from 'react';
import './Example.css';
import {
  Link,
  Redirect
} from 'react-router-dom'

class Example extends React.Component {
  constructor(props) {
    super(props)

    // Component state
    this.state = {text: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div>
        <div className='col-4'></div>
        <div className='col-4'>
          <h1>Upper case</h1>
          <div className='row'>
            <div className='col-6'>
              <input className='in' type='text'
                placeholder='Write your text!' value={this.state.text}
                onChange={this.handleChange} />
            </div>
            <div className='col-6'>
              <p className='txt'>{this.state.text.toUpperCase()}</p>
            </div>
          </div>
        </div>
        <div className='col-4'></div>
      </div>
    );
  }
}

export default Example;
