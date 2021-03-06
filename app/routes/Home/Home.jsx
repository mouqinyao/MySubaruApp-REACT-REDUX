import React, { Component, PropTypes } from 'react';

import VehicleBar from '~/components/VehicleBar';
import Heading from '~/components/Heading';
import Menu from '~/components/Menu';
import ProcessingBar from '~/components/ProcessingBar';

class Home extends Component {

	constructor(props) {
	    super(props);

	    this.goToRemoteServiceLanding = this.goToRemoteServiceLanding.bind(this);
	    this.goToDriverAlertLanding = this.goToDriverAlertLanding.bind(this);
		this.goToMessageLanding = this.goToMessageLanding.bind(this);
		this.goToSupportLanding = this.goToSupportLanding.bind(this);
		this.scheduleService = this.scheduleService.bind(this);
	}

	goToRemoteServiceLanding(e) {
	    e.preventDefault();
	    this.props.history.push('/remoteServiceLanding');
	}

	goToDriverAlertLanding(e) {
	    e.preventDefault();
	    this.props.history.push('/driverAlertLanding');
	}

	goToMessageLanding(e) {
	    e.preventDefault();
	    this.props.history.push('/messageLanding');
	}

	goToSupportLanding(e) {
	    e.preventDefault();
	    this.props.history.push('/supportLanding');
	}

	scheduleService(e) {
		e.preventDefault();
	    this.props.history.push('/service');
	}

	render() {
		return (
		  <div> 	
		    <Heading />
		    <div className="page">
		      <VehicleBar/>
		      <div className="home-hero"></div>
		    </div>
		    <div className="page__content">
			    <div className="blade" onClick={this.goToRemoteServiceLanding}>          
				    <div className="blade__heading">
				      <img className="blade__icon" src="/app/images/icon-remoteService.svg"/>
				      <div>
				        SUBARU STARLINK&trade;
				        <div className="blade__sub-heading">Remote Services</div>
				        <p className="blade__heading-description">Lock, Unlock and Locate Your Subaru</p>
				      </div>
				      <div className="blade__heading-dots"></div>
				    </div>
				</div>
				<div className="blade">         
				    <div className="blade__heading">
				      <img className="blade__icon" src="/app/images/icon-circleHealth.svg"/>
				      <div>
				        Vehicle Health
				        <p className="blade__heading-description">5 alert(s) for you Subaru</p>
				      </div>
				      <div className="blade__heading-dots"></div>
				    </div>
				</div>
				<div className="blade" onClick={this.goToMessageLanding}>
			        <div className="blade__heading">
			          <img className="blade__icon" src="/app/images/icon-circleMessage.png"/>
			          <div>
			            Messages
			            <p className="blade__heading-description">You have 4 message(s)</p>
			          </div>
			          <div className="blade__heading-dots"></div>
			        </div>
			    </div>
			    <div className="blade" onClick={this.goToDriverAlertLanding}>          
			        <div className="blade__heading">
			          <img className="blade__icon" src="/app/images/icon-driverAlert.svg"/>Driver Alerts Settings
			        </div>
			    </div>
			    <div className="blade" onClick={this.scheduleService}>         
			        <div className="blade__heading">
			          <img className="blade__icon" src="/app/images/icon-circleService.svg"/>
			          <div>
			            Services
			            <p className="blade__heading-description">Manage your vehicle's services</p>
			          </div>
			          <div className="blade__heading-dots"></div>
			        </div>
			    </div>
			    <div className="blade" onClick={this.goToSupportLanding}>         
			        <div className="blade__heading">
			          <img className="blade__icon" src="/app/images/icon-customerSupport.svg"/>
			          <div>
			            Support
			            <p className="blade__heading-description">Have a question? Find answers here</p>
			          </div>
			          <div className="blade__heading-dots"></div>
			        </div>
			    </div>
		    </div>
		    <ProcessingBar/>
		  </div>
		);
	}
}

export default Home;