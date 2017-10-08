import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class MainService extends Component {

  constructor(props) {
    super(props);
    this.findRetailer = this.findRetailer.bind(this);
  }

  findRetailer(e) {
    e.preventDefault();
    this.props.history.push('/findRetailer');
  }

  render() {
    return (
      <div>
        <Heading/>
        <div className="page">
          <VehicleBar/>
          <div className="page__content">
            <div className="page-title">Service</div>
            <div className="page__content-body">
              <div className="retailer">
                <div className="retailer__title retailer__title--bottom-spacing">My Retailer</div>
                <div className="retailer__name">Colonial Subaru</div>
                <p className="retailer__address">200 W Street Rd<br/>Feasterville, PA 19053</p>
                <div className="btn btn-primary btn--top-spacing">Schedule a Service Appointment</div>
                <div className="btn__group">
                  <div className="btn btn-info col-2">Service History</div>
                  <div className="btn btn-info col-2">Maintenance Schedule</div>
                </div>
                <div className="btn__group">
                  <div className="btn btn-info col-2">Call</div>
                  <div className="btn btn-info col-2">Record a Service</div>
                </div>
                <div className="btn btn-primary">Select a Different Retailer</div>  
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default MainService;

