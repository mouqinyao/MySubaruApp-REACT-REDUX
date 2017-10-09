import React, { Component } from 'react';

import Accordion from '~/components/Accordion';
import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class TipFAQ extends Component {

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
            <div className="page-title">Warranty FAQs</div>
            <Accordion/>            
          </div>
        </div>
      </div>
    );
  }
}

export default TipFAQ;

