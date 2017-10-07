import React, { Component, PropTypes } from 'react';

import VehicleBar from '~/routes/Vehicle/VehicleBar';
import Menu from '~/routes/Menu/Menu';

class Home extends Component {

	constructor(props) {
	    super(props);
	    this.goToRemoteServiceLanding = this.goToRemoteServiceLanding.bind(this);
	    this.goToDriverAlertLanding = this.goToDriverAlertLanding.bind(this);
		this.goToMessageLanding = this.goToMessageLanding.bind(this);
		this.goToSupportLanding = this.goToSupportLanding.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);

		this.state = {
			isActive: false
		}
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

	toggleMenu(e) {
		e.preventDefault();
		const currentState = this.state.isActive;
        this.setState({ isActive: !currentState });
	}

	render() {
		return (
		  <div> 	
		    <header>
		      <img src="/app/images/header.svg" className="header__img"/>
		      <div className="header__menu" onClick={this.toggleMenu}>
		      	<div className="header__toggle">
		      		<span className="header__toggle-line"></span>
		      		<span className="header__toggle-line"></span>
		      		<span className="header__toggle-line"></span>
		      	</div>
		      	<span className="header__menu-text">MENU</span>
		      </div>
		    </header>
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
			    <div className="blade">         
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
		    <div className={this.state.isActive ? 'menu--active': 'menu--inactive'}>
		    	<Menu/>
		    </div>
		  </div>
		);
	}
}

export default Home;