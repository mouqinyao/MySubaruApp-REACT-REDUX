import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';
import VehicleSupport from '~/routes/Vehicle/VehicleSupport';

class CustomerCare extends Component {

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
                <div className="retailer__title">Customer Care</div>
                <p className="retailer__description">For questions regarding your Subaru vehicle or retailer, please call:</p>
                <p>1-800-782-2783</p>
                <div className="btn__group">
                  <div className="btn btn-primary col-2">Email</div>
                  <div className="btn btn-primary col-2">Call Now</div>
                </div>
                <div className="retailer__name">Hours of Operation</div>
                <p className="retailer__address retailer__address--no-underline retailer__address--bottom-spacing">Monday - Thursday<br/>7:30 am - 8:00 pm (EST)</p>
                <p className="retailer__address retailer__address--no-underline retailer__address--bottom-spacing">Friday<br/>10:30 am - 5:00 pm (EST)</p>
                <p className="retailer__address retailer__address--no-underline retailer__address--bottom-spacing">Saturday<br/>9:00 am - 3:30 pm (EST)</p>
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

export default CustomerCare;

