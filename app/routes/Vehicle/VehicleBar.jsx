import React, { Component, PropTypes } from 'react';

class VehicleBar extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div className="vehicle__name">
	    	Vehicle Name
	    	<span className="vehicle__icon"></span>
    	</div>
    );
  }
}

export default VehicleBar;