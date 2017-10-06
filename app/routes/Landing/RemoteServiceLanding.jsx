import React, { Component, PropTypes } from 'react';
import './landing.css';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class RemoteServiceLanding extends Component {

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
			    	<div className="page-title">STARLINK&trade; Remote Services</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-start-engine.svg" className="landing__btn-icon"/>Start/Stop Engine
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-trips.svg" className="landing__btn-icon"/>Trips
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-lock-door.svg" className="landing__btn-icon"/>Lock Doors
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-unlock-door.svg" className="landing__btn-icon"/>Unlock Doors
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-horn-light.svg" className="landing__btn-icon"/>Horn &amp; Lights
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-locate-vehicle.svg" className="landing__btn-icon"/>Locate Vehicle
			    		</div>
			    	</div>
			    </div>
		    </div>
    	</div>
    )
  }
}

export default RemoteServiceLanding;