import React, { Component, PropTypes } from 'react';
import './landing.css';

class DriverAlertLanding extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div className="landing">
    		<header>
		      <img src="/app/images/header.svg" className="header__img"/>
		      <img src="/app/images/icon-back.svg" className="header__icon"/>
		      <div className="header__menu">
		      	<div className="header__toggle">
		      		<span className="header__toggle-line"></span>
		      		<span className="header__toggle-line"></span>
		      		<span className="header__toggle-line"></span>
		      	</div>
		      	<span className="header__menu-text">MENU</span>
		      </div>
		    </header>
		    <div className="page">
		      <div className="vehicle__name">Vehicle Name</div>
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
			    	<div className="landing__btn-container">
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