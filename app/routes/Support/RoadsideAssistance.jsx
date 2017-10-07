import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';
import VehicleSupport from '~/routes/Vehicle/VehicleSupport';

class RoadsideAssistance extends Component {

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
            <div className="page-title">24-Hour Roadside Assistance</div>
            <div className="btn btn-primary">Call 1-800-261-2155</div>
            <p className="text-align-center white">OR</p>
            <div className="btn btn-primary">Submit Online Request</div>                   
            <VehicleSupport/>       
            <div className="retailer__requirements">
              <h5 className="retailer__requirements-title">Features</h5>
              <ul className="retailer__requirements-list">
                <li>Towing to the nearest authorized Subaru retailer if you cannot safely drive your vehicle</li>
                <li>Jump-start if your battery is dead</li>
                <li>Gasoline delivery if you run out of gas</li>
                <li>Flat tire change to install your spare</li>
                <li>Emergency lockout service</li>
                <li>National Subaru retailer locator service, with phone numbers and location of the nearest retailer anywhere in the U.S. or Canada</li>
              </ul>
              <h5 className="retailer__requirements-title">Exclusions</h5>
              <p className="retailer__requirements-text">Specifically excluded from Subaru Roadside Assistance coverage are service requests or claims results from: accidents, vandalism, acts of God, violation of any laws, or vehicle modifications not recommended by the manufacturer.</p>
              <p className="retailer__requirements-text">For more information, contact your retailer</p>
              <hr/>
              <p className="retailer__requirements-footer">Subaru Roadside Assistance is free and standard on every Subaru from model year 2000 forward. Coverage is automatic; there are no forms to complete. Subaru Roadside Assistance is available anytime during the 3-year/36,000-mile Subaru Limited Warranty, whichever comes first.</p>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default RoadsideAssistance;

