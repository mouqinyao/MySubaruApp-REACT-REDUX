import React, { Component } from 'react';
import Curfew from './Curfew';

import Heading from '~/routes/Heading/Heading';
import VehicleBar from '~/routes/Vehicle/VehicleBar';

class CurfewPanel extends Component {

  constructor(props) {
    super(props);

    this.initValues = [{"day":"Monday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Tuesday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Wednesday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Thursday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Friday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Saturday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"},
                       {"day":"Sunday","startHour":"8","startMinute": "00", "startPeriod":"pm", "endHour":"6","endMinute": "00", "endPeriod":"am"}];

    
  }

  render() {
    return (
      <div>
        <Heading/>
        <div className="page">
          <VehicleBar/>
          <div className="page__content">
            <div className="page-title">Curfews</div>
            <div className="page__content-body">
              <div className="flex">
                <a href="#" className="text-link flex__item--fill">Apply All</a>
                <label>Start Time</label>
                <label>End Time</label>
              </div>
              <Curfew initValue={this.initValues[0]}/>
              <Curfew initValue={this.initValues[1]}/>
              <Curfew initValue={this.initValues[2]}/>
              <Curfew initValue={this.initValues[3]}/>
              <Curfew initValue={this.initValues[4]}/>
              <Curfew initValue={this.initValues[5]}/>
              <Curfew initValue={this.initValues[6]}/>
            </div>
            <div className="btn__group">
              <div className="btn btn-secondary col-2">Cancel</div>
              <div className="btn btn-primary col-2">Save</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurfewPanel;

