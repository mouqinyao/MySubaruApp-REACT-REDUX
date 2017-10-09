import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

class VehicleBar extends Component {

  constructor(props) {
    super(props);
    this.getVehicleInformation = this.getVehicleInformation.bind(this);
  }

  getVehicleInformation(e) {
    e.preventDefault();
    this.props.history.push('/vehicleInformation');
  }

  render() {   
    return (
    	<div className="vehicle__name">
	    	Karen:4S4BRBAC2C3240040
	    	<span className="vehicle__icon" onClick={this.getVehicleInformation}></span>
    	</div>
    );
  }
}

export default withRouter(VehicleBar);