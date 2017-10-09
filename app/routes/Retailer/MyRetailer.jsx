import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class MyRetailer extends Component {

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
                  <div className="retailer__action-box">
                    <img src="/app/images/icon-web.svg" className="retailer__action-icon"/>
                    <div className="retailer__action-text">Retailer<br/>Website</div>
                  </div>
                  <div className="retailer__action-box">
                    <img src="/app/images/icon-map.svg" className="retailer__action-icon"/>
                    <div className="retailer__action-text">Get<br/>Directions</div>
                  </div>
                  <div className="retailer__action-box" onClick={this.findRetailer}>
                    <img src="/app/images/icon-locate.svg" className="retailer__action-icon"/>
                    <div className="retailer__action-text">Find a<br/>Retailer</div>
                  </div>
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

