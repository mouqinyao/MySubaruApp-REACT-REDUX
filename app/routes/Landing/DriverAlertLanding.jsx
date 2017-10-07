import React, { Component, PropTypes } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class DriverAlertLanding extends Component {

  constructor(props) {
    super(props);
    this.reviewCurfew = this.reviewCurfew.bind(this);

  }

  reviewCurfew(e) {
  	e.preventDefault();
  	this.props.history.push('/reviewCurfew');
  }

  render() {   
    return (
    	<div className="landing">
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		        <div className="page__content">
			    	<div className="page-title">STARLINK&trade; Remote Services</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-speed-alert.svg" className="landing__btn-icon"/>Speed Alerts
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-boundaries.svg" className="landing__btn-icon"/>Boundary Alerts
			    		</div>
			    	</div>
			    	<div className="landing__btn-container" onClick={this.reviewCurfew}>
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-curfew.svg" className="landing__btn-icon"/>Curfew Alerts
			    		</div>
			    	</div>
			    </div>
		    </div>
    	</div>
    )
  }
}

export default DriverAlertLanding;