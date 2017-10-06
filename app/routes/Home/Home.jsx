import React, { Component, PropTypes } from 'react';
import './home.css';

class Home extends Component {

	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e) {
	    e.preventDefault();
	    this.props.history.push('/curfews');
	}

	render() {
		return (
		  <div> 	
		    <header>
		      <img src="/app/images/header.svg" className="header__img"/>
		    </header>
		    <div className="page">
		      <div className="vehicle__name">Vehicle Name</div>
		      <div className="home-hero"></div>
		    </div>
		    <div className="blade">          
			    <div className="blade__heading" onClick={this.handleClick}>
			      <img className="blade__icon" src="/app/images/icon_remoteService.svg"/>
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
			      <img className="blade__icon" src="/app/images/icon_circleHealth.svg"/>
			      <div>
			        Vehicle Health
			        <p className="blade__heading-description">5 alert(s) for you Subaru</p>
			      </div>
			      <div className="blade__heading-dots"></div>
			    </div>
			</div>
			<div className="blade">
		        <div className="blade__heading">
		          <img className="blade__icon" src="/app/images/icon_circleMessage.png"/>
		          <div>
		            Messages
		            <p className="blade__heading-description">You have 4 message(s)</p>
		          </div>
		          <div className="blade__heading-dots"></div>
		        </div>
		    </div>
		    <div className="blade">          
		        <div className="blade__heading">
		          <img className="blade__icon" src="/app/images/icon_driverAlert.svg"/>Driver Alerts Settings
		        </div>
		    </div>
		    <div className="blade">         
		        <div className="blade__heading">
		          <img className="blade__icon" src="/app/images/icon_circleService.svg"/>
		          <div>
		            Services
		            <p className="blade__heading-description">Manage your vehicle's services</p>
		          </div>
		          <div className="blade__heading-dots"></div>
		        </div>
		    </div>
		  </div>
		);
	}
}

export default Home;