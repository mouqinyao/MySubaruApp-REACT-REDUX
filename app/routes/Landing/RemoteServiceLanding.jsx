import React, { Component, PropTypes } from 'react';
import './landing.css';

class RemoteServiceLanding extends Component {

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
		      <div className="vehicle__name">Vehicle Name<span className="vehicle__icon"></span></div>		    
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