import React, { Component, PropTypes } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class MessageLanding extends Component {

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
			    	<div className="page-title">Messages</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-message.svg" className="landing__btn-icon"/>Important Messages
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-coupon.svg" className="landing__btn-icon"/>Coupons
			    		</div>
			    	</div>
			    	<div className="landing__btn-container">
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-event.svg" className="landing__btn-icon"/>Subaru Events
			    		</div>
			    	</div>
			    </div>
		    </div>
    	</div>
    )
  }
}

export default MessageLanding;