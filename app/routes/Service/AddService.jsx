import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class AddService extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div>
    		<Heading/>
		    <div className="page">
		    	<VehicleBar/>
		    	<div className="page__content">
			    	<div className="page-title">Service</div>
			    	<div className="form">
			    		<div className="form__title">Add Service Entry</div>
			    		<div className="form__block form__block--column">
			                <label className="form__label form__label--blue"><span className="red">*</span>Service Provider</label>
			                <input className="form__input" defaultValue="" placeholder="Service Provider Name"/>
			            </div>
			            <div className="form__block flex--space-between">
			                <div className="flex flex--column col-2">
			                    <label className="form__label form__label--blue"><span className="red">*</span>Date of Service</label>
			                    <input type="date" className="form__input" defaultValue="" placeholder="Select Date"/>
			                </div>
			                <div className="flex flex--column col-2">
			                    <label className="form__label form__label--blue"><span className="red">*</span>Mileage</label>
			                    <input className="form__input" defaultValue=""/>
			                </div>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label form__label--blue"><span className="red">*</span>Notes</label>
			                <textarea className="form__textarea" placeholder="notes"></textarea>
			            </div>
			    	</div>
			    	<div className="btn__group">
			    		<div className="btn btn-secondary col-2">Cancel</div>
			    		<div className="btn btn-primary col-2">Save</div>
			    	</div>
			    </div>
			</div>
    	</div>
    );
  }

}

export default AddService;