import React, { Component } from 'react';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class ResourceCenter extends Component {

  constructor(props) {
    super(props);
    
    this.viewFAQ = this.viewFAQ.bind(this);  
  }

  viewFAQ(e) {
    e.preventDefault();
    this.props.history.push('/tipFAQ');
  }

  render() {
    return (
      <div>
        <Heading/>
        <div className="page">
          <VehicleBar/>
          <div className="page__content">
            <div className="page-title">How to and Info</div>
            <div className="page__image-container">
              <h3 className="page__image-title">How-To Videos</h3>
              <img className="page__image" src="/app/images/how-to-videos.jpg"/>
            </div>
            <div className="page__image-container">
              <h3 className="page__image-title">FAQ's</h3>
              <img className="page__image" src="/app/images/faqs.jpg" onClick={this.viewFAQ}/>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceCenter;

