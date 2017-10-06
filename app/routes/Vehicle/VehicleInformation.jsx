import React, { Component, PropTypes } from 'react';

class VehicleInformation extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div>
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
			    	<div className="page-title">Vehicle Information</div>
			    	<div className="form">
			    		<div className="form__block form__block--column">
			                <label className="form__label">VIN</label>
			                <input className="form__input" defaultValue="4S4BRBAC2C3240040" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">Vehicle's Nickname</label>
			                <input className="form__input" defaultValue="Karen:4S4BRBAC2C3240040" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">Current Mileage</label>
			                <input className="form__input" defaultValue="" disabled/>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Model</label>
			                    <input className="form__input" defaultValue="Outback" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Year</label>
			                    <input className="form__input" defaultValue="2018" disabled/>
			                </div>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Engine</label>
			                    <input className="form__input" defaultValue="2.5" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Transmission</label>
			                    <input className="form__input" defaultValue="CVT" disabled/>
			                </div>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Exterior Color</label>
			                    <input className="form__input" defaultValue="White" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Interior Color</label>
			                    <input className="form__input" defaultValue="Black" disabled/>
			                </div>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">License Plate Number</label>
			                    <input className="form__input" defaultValue="H38EZB" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">License Plate State</label>
			                    <input className="form__input" defaultValue="NJ" disabled/>
			                </div>
			            </div>
			    	</div>
			    	<div className="btn btn-primary btn--top-spacing">Manage Vehicles</div>
			    </div>
			</div>
    	</div>
    );
  }

}

export default VehicleInformation;