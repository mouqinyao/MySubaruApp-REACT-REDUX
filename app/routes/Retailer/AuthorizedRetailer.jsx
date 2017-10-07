import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class AuthorizedRetailer extends Component {

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
            <div className="page-title">Profile</div>
            <div className="page__content-body">
              <div className="retailer">
                <div className="retailer__title retailer__title--bottom-spacing">Authorized Retailer</div>
                <div className="retailer__name text-align-center">Colonial Subaru</div>
                <p className="retailer__address retailer__address--no-underline text-align-center">200 W Street Rd<br/>Feasterville, PA 19053</p>
                <div className="btn__group">
                  <div className="btn btn-primary col-2">Call Sales</div>
                  <div className="btn btn-primary col-2">Call Service</div>
                </div>
                <div className="retailer__action">
                  <div className="retailer__action-box retailer__action-box--right-spacing flex flex--vertical-center">Retailer Website</div>
                  <div className="retailer__action-box retailer__action-box--right-spacing flex flex--vertical-center">Get Directions</div>
                  <div className="retailer__action-box flex flex--vertical-center">Assign as My Preferred Retailer</div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorizedRetailer;

