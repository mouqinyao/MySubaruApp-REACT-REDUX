import React, { Component, PropTypes } from 'react';

class Curfew extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {initValue} = this.props;
    return (
      <div className="curfew">
        <div className="curfew__setting">
          <input className="curfew__input form__input form__input--hidden" type="checkbox" id={initValue.day}/>
          <label className="curfew__input-label" htmlFor={initValue.day}>{initValue.day}</label>
        </div>
        <div className="curfew__time">
          <span className="curfew__time-display">{initValue.startHour}:{initValue.startMinute}</span>
          <span className="curfew__time-period">{initValue.startPeriod}</span>
        </div>
        <div className="curfew__time">
          <span className="curfew__time-display">{initValue.endHour}:{initValue.endMinute}</span>
          <span className="curfew__time-period">{initValue.endPeriod}</span>
        </div>
      </div>
    );
  }
}

Curfew.propTypes = {
  

};

Curfew.defaultProps = {
  
};

export default Curfew;

