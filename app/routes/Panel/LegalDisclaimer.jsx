import React, { Component, PropTypes } from 'react';

class LegalDisclaimer extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div>
    		<div className="panel">
                <div className="panel__close close"></div>
                <div className="panel__content pin">
                    <h2 className="panel__content-title">Legal Disclaimers</h2>                    
                    <p className="panel__content-sub-title">Content will open in a new page</p>            
                    <div className="btn btn-primary btn--top-spacing">Legal Disclaimers</div>
                    <div className="btn btn-primary btn--top-spacing">MySubaru Privacy Policy</div>
                    <div className="btn btn-primary btn--top-spacing">MySubaru Terms &amp; Conditions</div>
                    <div className="btn btn-primary btn--top-spacing">STARLINK&trade; Privacy Policy</div>
                    <div className="btn btn-primary btn--top-spacing">STARLINK&trade; Terms &amp; Conditions</div>        
                </div>
            </div>
    	</div>
    );
  }
}

export default LegalDisclaimer;
