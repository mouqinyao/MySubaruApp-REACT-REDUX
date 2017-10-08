import React, { Component, PropTypes } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class ContactInformation extends Component {

  constructor(props) {
    super(props);

    this.changePassword = this.changePassword.bind(this);
    this.manageSecurityQuestion = this.manageSecurityQuestion.bind(this);

  }

  changePassword(e) {
  	e.preventDefault();
  	this.props.history.push('/changePassword');
  }

  manageSecurityQuestion(e) {
  	e.preventDefault();
  	this.props.history.push('/manageSecurityQuestion');
  }

  render() {   
    return (
    	<div>
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		    	<div className="page__content">
			    	<div className="page-title">Contact Information</div>
			    	<div className="form">
			    		<div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">Last Name</label>
			                    <input className="form__input" defaultValue="Mou" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">First Name</label>
			                    <input className="form__input" defaultValue="Karen" disabled/>
			                </div>
			            </div>
			    		<div className="form__block form__block--column">
			                <label className="form__label">Mobile Phone</label>
			                <input className="form__input" defaultValue="315-385-9501" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">E-Mail Address</label>
			                <input className="form__input" defaultValue="mouqinyao@gmail.com" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">Address</label>
			                <input className="form__input" defaultValue="125 Cobble Creek Circle" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">Address 2</label>
			                <input className="form__input" defaultValue="" disabled/>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">City</label>
			                <input className="form__input" defaultValue="Cherry Hill" disabled/>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label">State</label>
			                    <input className="form__input" defaultValue="NJ" disabled/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label">ZIP</label>
			                    <input className="form__input" defaultValue="08003" disabled/>
			                </div>
			            </div>
			    	</div>
			    	<div className="btn btn-primary btn--top-spacing">Edit</div>
			    	<div className="page-title">Security Settings</div>
			    	<div className="form">
			    		<div className="btn btn-primary" onClick={this.manageSecurityQuestion}>Manage Security Questions</div>
			    		<div className="btn btn-primary btn--top-spacing" onClick={this.changePassword}>Change Password</div>
			    		<p className="page__content-description">Need to update additional security settings? Log into the full MySubaru experience at www.mysubaru.com to manage your security settings.</p>
			    	</div>
			    </div>
			</div>
    	</div>
    );
  }

}

export default ContactInformation;