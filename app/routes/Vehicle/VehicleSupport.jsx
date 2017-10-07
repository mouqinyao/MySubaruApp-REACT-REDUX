import React, { Component, PropTypes } from 'react';

class VehicleSupport extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (    	
    	<div className="form">
    		<div className="form__block form__block--column">
                <label className="form__label">VIN</label>
                <input className="form__input" defaultValue="4S4BRBAC2C3240040" disabled/>
            </div>
            <div className="form__block form__block--column">
                <label className="form__label">Current Mileage</label>
                <input className="form__input" defaultValue="3831" disabled/>
            </div>
            <div className="form__block flex--space-between">
                <div className="flex flex--column col-2">
                    <label className="form__label">License Plate Number</label>
                    <input className="form__input" defaultValue="H38EZB" disabled/>
                </div>
                <div className="flex flex--column col-2">
                    <label className="form__label">License Plate State</label>
                    <input className="form__input" defaultValue="NJ" disabled/>
                </div>
            </div>
            <div className="form__block form__block--column">
                <label className="form__label">Agreement Description</label>
                <input className="form__input" defaultValue="N/A" disabled/>
            </div>
            <div className="form__block form__block--column">
                <label className="form__label">Agreement Expiration Date</label>
                <input className="form__input" defaultValue="N/A" disabled/>
            </div>
    	</div>
    );
  }

}

export default VehicleSupport;