import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class FindRetailer extends Component {

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
                <div className="retailer__title">Find a Retailer</div>
                <p className="retailer__description">Finding a Subaru retailer is quick and easy. Simply enter a zip code and we'll provide you with a list of authorized retailers near you.</p>
                <input type="text" className="retailer__search" maxLength="5" placeholder="Enter Zip code"/>
                <div className="retailer__results-list">
                  <div className="flex retailer__results-list-item">
                    <div className="flex__item--fill">
                      <div className="retailer__name">1. Colonial Subaru</div>
                      <p className="retailer__address retailer__address--no-underline">200 W Street Rd<br/>Feasterville, PA 19053</p>
                    </div>
                    <div>1.56 mi</div>
                  </div>
                  <div className="flex retailer__results-list-item">
                    <div className="flex__item--fill">
                      <div className="retailer__name">2. Colonial Subaru</div>
                      <p className="retailer__address retailer__address--no-underline">200 W Street Rd<br/>Feasterville, PA 19053</p>
                    </div>
                    <div>1.56 mi</div>
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

export default FindRetailer;

