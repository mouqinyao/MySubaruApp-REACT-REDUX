import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class Warranty extends Component {

  constructor(props) {
    super(props);
    
    this.warrantyFAQ = this.warrantyFAQ.bind(this);
  }

  warrantyFAQ(e) {
    e.preventDefault();
    this.props.history.push('/warrantyFAQ');
  }

  render() {
    return (
      <div>
        <Heading/>
        <div className="page">
          <VehicleBar/>
          <div className="page__content">
            <div className="page-title">Warranty</div>
            <div className="page__content-body">
              <div className="retailer">
                <p className="retailer__description">This chart summarizes your warranty coverage since the original date of purchase.</p>
                <div className="retailer__results-list">
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">1 year</div>
                      <div className="retailer__mileage">UNLIMITED MILEAGE</div>
                      <p className="retailer__warranty">Replacement Parts and Accessories Limited</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">2 year</div>
                      <div className="retailer__mileage">24,000 MILES</div>
                      <p className="retailer__warranty">Federal Specification Emission Performance Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">3 year</div>
                      <div className="retailer__mileage">36,000 MILES</div>
                      <p className="retailer__warranty">New Car Limited Warranty, Federal Specification Emission Defect Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">5 year</div>
                      <div className="retailer__mileage">60,000 MILES</div>
                      <p className="retailer__warranty">Powertrain Limited Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">5 year</div>
                      <div className="retailer__mileage">UNLIMITED MILEAGE</div>
                      <p className="retailer__warranty">Rust Perforation Limited Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">7 year</div>
                      <div className="retailer__mileage">70,000 MILES</div>
                      <p className="retailer__warranty">California Specification Emission Extended Defect Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">8 year</div>
                      <div className="retailer__mileage">80,000 MILES</div>
                      <p className="retailer__warranty">Federal Specification Emission Extended Defect Warranty</p>
                  </div>
                  <div className="retailer__results-list-item">         
                      <div className="retailer__name">Lifetime</div>
                      <div className="retailer__mileage">LIFETIME</div>
                      <p className="retailer__warranty">Seat Belt Lifetime Limited Warranty</p>
                  </div>
                  <div className="btn btn-primary btn--top-spacing" onClick={this.warrantyFAQ}>Warranty Frequently Asked Questions</div>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default Warranty;

