import React, { Component } from 'react';

class ProcessingBar extends Component {

  constructor(props) {
    super(props);   
    
  }

  
  render() {
    return (
      <div className="processing">
        <div className="processing__title">Remote Service Message...</div>
        <img className="processing__icon" src="/app/images/icon-smallX.svg"/>
      </div>            
    );
  }
}

export default ProcessingBar;

