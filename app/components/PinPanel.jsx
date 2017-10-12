import React, { Component, PropTypes } from 'react';

class PinPanel extends Component {

  constructor(props) {
    super(props);
    
    this.addPin = this.addPin.bind(this);
  }

  addPin(e) {
    e.preventDefault();
    console.log(e.target.value)
  }

  deletePin(e) {
    e.preventDefault();
    
  }

  clearPin(e) {
    e.preventDefault();
    
  }

  render() {   
    return (
    	<div>
    		<div className="panel">
                <div className="panel__close close"></div>
                <div className="panel__content pin">
                    <h2 className="panel__content-title panel__content-title--with-border">PIN Required</h2>                    
                    <p className="panel__content-sub-title">Enter PIN</p>            
                    <div className="panel__content-processing-dots processingDots">
                        <span className="panel__content-processing-dot"></span>
                        <span className="panel__content-processing-dot"></span>
                        <span className="panel__content-processing-dot"></span>
                        <span className="panel__content-processing-dot"></span>
                    </div>                    
                    <div className="panel__content-keyboard">
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="1" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="2" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="3" readOnly/>                   
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="4" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="5" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="6" readOnly/>                   
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="7" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="8" readOnly/>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="9" readOnly/>                   
                        <span className="panel__content-keyboard-key panel__content-keyboard-key--clear" onClick={this.clearPin}>CLEAR</span>
                        <input className="panel__content-keyboard-key" onClick={this.addPin} defaultValue="0" readOnly/>
                        <span className="panel__content-keyboard-key panel__content-keyboard-key--backspace" onClick={this.deletePin}></span>
                    </div>           
                </div>
            </div>
    	</div>
    );
  }
}

export default PinPanel;
