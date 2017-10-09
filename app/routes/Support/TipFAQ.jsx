import React, { Component } from 'react';

import Accordion from '~/components/Accordion';
import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

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

