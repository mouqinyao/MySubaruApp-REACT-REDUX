import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class MyProfileLanding extends Component {

  constructor(props) {
    super(props);
    this.viewMyRetailer = this.viewMyRetailer.bind(this);
    this.viewContactInformation = this.viewContactInformation.bind(this);
  }

  viewContactInformation(e) {
  	e.preventDefault();
  	this.props.history.push('/contactInformation');
  }

  viewMyRetailer(e) {
  	e.preventDefault();
  	this.props.history.push('/myRetailer');
  }

  render() {   
    return (
    	<div className="landing">
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		        <div className="page__content">
			    	<div className="page-title">Support</div>
			    	<div className="landing__btn-container" onClick={this.viewContactInformation}>
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-contactInformation.svg" className="landing__btn-icon"/>Contact Information
			    		</div>
			    	</div>
			    	<div className="landing__btn-container" onClick={this.viewMyRetailer}>
			    		<div className="landing__btn">
			    			<img src="/app/images/icon-myRetailer.svg" className="landing__btn-icon"/>My Retailer
			    		</div>
			    	</div>
			    </div>
		    </div>
    	</div>
    )
  }
}

export default MyProfileLanding;