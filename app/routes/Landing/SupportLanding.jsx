import React, { Component, PropTypes } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class SupportLanding extends Component {

  constructor(props) {
    super(props);
    this.viewMyRetailer = this.viewMyRetailer.bind(this);
    this.viewRoadsideAssistance = this.viewRoadsideAssistance.bind(this);
    this.viewStarlinkCustomerCare = this.viewStarlinkCustomerCare.bind(this);
    this.viewCustomerCare = this.viewCustomerCare.bind(this);
  }

  viewMyRetailer(e) {
  	e.preventDefault();
  	this.props.history.push('/myRetailer');
  }

  viewRoadsideAssistance(e) {
  	e.preventDefault();
  	this.props.history.push('/roadsideAssistance');
  }

  viewStarlinkCustomerCare(e) {
  	e.preventDefault();
  	this.props.history.push('/starlinkCustomerCare');
  }

  viewCustomerCare(e) {
  	e.preventDefault();
  	this.props.history.push('/customerCare');
  }

  render() {   
    return (
    	<div className="landing">
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		        <div className="page__content">
			    	<div className="page-title">Support</div>
			    	<div className="landing__btn-container" onClick={this.viewMyRetailer}>
			    		<div className="landing__btn">
			    			My Retailer
			    		</div>
			    	</div>
			    	<div className="landing__btn-container" onClick={this.viewRoadsideAssistance}>
			    		<div className="landing__btn">
			    			24-Hour Roadside Assistance
			    		</div>
			    	</div>
			    	<div className="landing__btn-container" onClick={this.viewStarlinkCustomerCare}>
			    		<div className="landing__btn">
			    			STARLINK&trade; Customer Support
			    		</div>
			    	</div>
			    	<div className="landing__btn-container" onClick={this.viewCustomerCare}>
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