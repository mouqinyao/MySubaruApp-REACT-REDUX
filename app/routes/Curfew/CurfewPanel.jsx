import React, { Component } from 'react';
import Curfew from './Curfew';

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
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[0]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[1]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[2]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[3]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[4]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[5]}/>
        <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[6]}/>
      </div>
    );
  }
}

export default CurfewPanel;

