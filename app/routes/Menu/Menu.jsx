import React, { Component, PropTypes } from 'react';

import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.goToHome = this.goToHome.bind(this);
        this.goToRemoteServiceLanding = this.goToRemoteServiceLanding.bind(this);
        this.goToRoadsideAssistance = this.goToRoadsideAssistance.bind(this);
        this.goToService = this.goToService.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.goToWarranty = this.goToWarranty.bind(this);
        this.goToSupportLanding = this.goToSupportLanding.bind(this);
        this.goToLegalDisclaimer = this.goToLegalDisclaimer.bind(this);
    }

    goToHome(e) {
        e.preventDefault();
        this.props.history.push('/home');
    }

    goToRemoteServiceLanding(e) {
        e.preventDefault();
        this.props.history.push('/remoteServiceLanding');
    }

    goToRoadsideAssistance(e) {
        e.preventDefault();
        this.props.history.push('/roadsideAssistance');
    }

    goToService(e) {
        e.preventDefault();
        this.props.history.push('/service');
    }

    goToProfile(e) {
        e.preventDefault();
        this.props.history.push('/contactInformation');
    }

    goToWarranty(e) {
        e.preventDefault();
        this.props.history.push('/warranty');
    }

    goToSupportLanding(e) {
        e.preventDefault();
        this.props.history.push('/supportLanding');
    }

    goToLegalDisclaimer(e) {
        e.preventDefault();
        this.props.history.push('/legalDisclaimer');
    }

  render() {   
    return (
    	<div className="menu">
    		<ul className="menu__list">
    			<li onClick={this.goToHome}>Home</li>
    			<li onClick={this.goToRemoteServiceLanding}>SUBARU STARLINK&trade; Services</li>
    			<li onClick={this.goToRoadsideAssistance}>Roadside Assistance</li>
    			<li onClick={this.goToService}>Service</li>
    			<li onClick={this.goToProfile}>My Profile</li>
    			<li>My Vehicles</li>
    			<li onClick={this.goToWarranty}>Warranty &amp; Extended Services</li>
    			<li>How To and Info</li>
    			<li onClick={this.goToSupportLanding}>Support</li>
    			<li onClick={this.goToLegalDisclaimer}>Legal Disclaimers</li>
    			<li>Log Out</li>
    		</ul>
    	</div>
    );
  }
}

export default withRouter(Menu);