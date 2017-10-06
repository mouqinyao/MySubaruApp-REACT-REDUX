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
        <header>
          <img src="/app/images/header.svg" className="header__img"/>
          <img src="/app/images/icon-back.svg" className="header__icon"/>
          <div className="header__menu">
            <div className="header__toggle">
              <span className="header__toggle-line"></span>
              <span className="header__toggle-line"></span>
              <span className="header__toggle-line"></span>
            </div>
            <span className="header__menu-text">MENU</span>
          </div>
        </header>
        <div className="page">
          <div className="vehicle__name">Vehicle Name</div>
          <div className="page__content">
            <div className="page-title">Curfews</div>
            <div className="page__content-body">
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[0]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[1]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[2]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[3]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[4]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[5]}/>
              <Curfew onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[6]}/>
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

