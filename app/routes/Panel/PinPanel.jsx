import React, { Component, PropTypes } from 'react';
import './panel.css';

class PinPanel extends Component {

  constructor(props) {
    super(props);

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
                        <span className="panel__content-processing-dot dot"></span>
                        <span className="panel__content-processing-dot dot"></span>
                        <span className="panel__content-processing-dot dot"></span>
                        <span className="panel__content-processing-dot dot"></span>
                    </div>                    
                    <div className="panel__content-keyboard" id="pinPad">
                        <span className="panel__content-keyboard-key key" >1</span>
                        <span className="panel__content-keyboard-key key" >2</span>
                        <span className="panel__content-keyboard-key key" >3</span>                    
                        <span className="panel__content-keyboard-key key" >4</span>
                        <span className="panel__content-keyboard-key key" >5</span>
                        <span className="panel__content-keyboard-key key" >6</span>                   
                        <span className="panel__content-keyboard-key key" >7</span>
                        <span className="panel__content-keyboard-key key" >8</span>
                        <span className="panel__content-keyboard-key key" >9</span>                    
                        <span className="panel__content-keyboard-key panel__content-keyboard-key--clear key" id="pinClear" >CLEAR</span>
                        <span className="panel__content-keyboard-key key" >0</span>
                        <span className="panel__content-keyboard-key panel__content-keyboard-key--backspace key" id="pinBackspace" ></span>
                    </div>           
                </div>
            </div>
    	</div>
    );
  }
}

export default PinPanel;
