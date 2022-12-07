import React, { Component } from 'react'
import "./Emergency.css";

export default class Emergency extends Component {
  constructor(){
    super();
    this.state={
      showMe: true
    }
  }

  operation(){
    this.setState({
      showMe: !this.state.showMe
    })
  }

  render() {
    return (
      <div>
        <button onClick={() =>{this.operation()}} className="E-button text-light mb-1">Emergency</button>
        {
          this.state.showMe?
          <div className='emergency'>
            <div className='contact text-light ms-3'>
              Contact for emergency!
            </div>
            <div className='num text-light fw-bold text-center mt-1'>
               0123-4567891
            </div>
             
          </div>
          :null
        }
      </div>
    )
  }
}

