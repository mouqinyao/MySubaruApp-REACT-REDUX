import React, { Component, PropTypes } from 'react';
import './landing.css';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class SupportLanding extends Component {

  constructor(props) {
    super(props);
  }

  render() {   
    return (
    	<div className="landing">
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		        <div className="page__content">
			    	<div className="page-title">Support</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			My Retailer
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			24-Hour Roadside Assistance
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			STARLINK&trade; Customer Support
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			Subaru Customer Support
			    		</div>
			    	</div>
			    </div>
		    </div>
    	</div>
    )
  }
}

export default SupportLanding;