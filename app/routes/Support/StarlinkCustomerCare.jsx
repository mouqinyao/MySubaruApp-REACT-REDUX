import React, { Component } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';
import VehicleSupport from '~/routes/Vehicle/VehicleSupport';

class StarlinkCustomerCare extends Component {

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
            <div className="page-title">Support</div>
            <div className="page__content-body">
              <div className="retailer">
                <div className="retailer__title">SUBARU STARLINK&trade;<br/>Customer Care</div>
                <p className="retailer__description">For questions specific to your STARLINK&trade; account (change you PIN, renew/cancel your subscription) please call:</p>
                <p>1-855-753-2495</p>
                <div className="btn btn-primary">Call Now</div>
                <p className="retailer__description">STARLINK&trade; Customer Care is available 24 hours a day, seven days a week.</p>
                <hr/>   
                <VehicleSupport/>            
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default StarlinkCustomerCare;

