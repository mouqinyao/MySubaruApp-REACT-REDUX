import React, { Component, PropTypes } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class SpeedAlert extends Component {

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
			    	<div className="page-title">Speed Alert</div>
			    	<div className="form">
			    		<div className="form__title">Notify me when the vehicle exceeds:</div>
			    		<div className="form__block">
			    			<div className="grid-9">
				                <select className="form__select">
				                	<option>70</option>
				                	<option>80</option>
				                	<option>90</option>
				                </select>
			                </div>
			                <div className="grid-3 form__mph">MPH</div>
			            </div>
			            <div className="form__block form__block--column">
			                <label className="form__label">Duration Until Alert</label>
			                <select className="form__select">
			                	<option>30 seconds</option>
			                	<option>60 seconds</option>
			                	<option>90 seconds</option>
			                	<option>120 seconds</option>
			                </select>
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

export default SpeedAlert;