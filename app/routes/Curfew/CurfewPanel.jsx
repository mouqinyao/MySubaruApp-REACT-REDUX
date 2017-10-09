import React, { Component } from 'react';
import 'whatwg-fetch';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class CurfewPanel extends Component {

  constructor(props) {
    super(props);

    this.saveCurfewSetting = this.saveCurfewSetting.bind(this);
  }

  saveCurfewSetting(e) {
    e.preventDefault();
    this.props.history.push('/reviewCurfew');
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
              <div className="page__content-heading">
                <a href="#" className="page__content-heading-link text-link flex__item--fill">Apply All</a>
                <label className="page__content-heading-label">Start Time</label>
                <label className="page__content-heading-label">End Time</label>
              </div>
              <Curfew />
            </div>
            <div className="btn__group">
              <div className="btn btn-secondary col-2">Cancel</div>
              <div className="btn btn-primary col-2" onClick={this.saveCurfewSetting}>Save</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Curfew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  getCurfewList() {
    fetch('/app/mockdata/curfewList.json')
    .then(function(response) {
      if (response.status >= 400) throw new Error("Bad response from server");     
      return response.json();
    }).then(function(results) {
      this.setState({items: results});
    }.bind(this))
  }

  componentWillMount() {
    this.getCurfewList();
  }

  render() {
    let items = this.state.items;
    
    return (
      <div>
        {items.map(item =>
          <div className="curfew" key={item.day}>
            <div className="curfew__setting">
              <input className="curfew__input form__input form__input--hidden" type="checkbox" id={item.day}/>
              <label className="curfew__input-label" htmlFor={item.day}>{item.day}</label>
            </div>
            <div className="curfew__time">
              <span className="curfew__time-display">{item.startHour}:{item.startMinute}</span>
              <span className="curfew__time-period">{item.startPeriod}</span>
            </div>
            <div className="curfew__time">
              <span className="curfew__time-display">{item.endHour}:{item.endMinute}</span>
              <span className="curfew__time-period">{item.endPeriod}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CurfewPanel;

