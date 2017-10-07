import React, { Component } from 'react';
import './retailer.css';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class MyRetailer extends Component {

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
            <div className="page-title">My Retailer</div>
            <div className="page__content-body">
              <div className="retailer">
                <div className="retailer__name">Colonial Subaru</div>
                <p className="retailer__address">200 W Street Rd<br/>Feasterville, PA 19053</p>
                <div className="btn__group">
                  <div className="btn btn-primary col-2">Call Sales</div>
                  <div className="btn btn-primary col-2">Call Service</div>
                </div>
                <div className="btn btn-primary">Schedule a Service Appointment</div>
                <div className="retailer__action">
                  <div className="retailer__action-box retailer__action-box--right-spacing">Retailer Website</div>
                  <div className="retailer__action-box retailer__action-box--right-spacing">Get Directions</div>
                  <div className="retailer__action-box">Find a Retailer</div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default MyRetailer;

