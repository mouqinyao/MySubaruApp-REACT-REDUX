import React, { Component } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class ChangePassword extends Component {

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
            <div className="page-title">Security Questions</div>
            <div className="page__content-body">
              <div className="form form--with-bg">
                <div className="form__block form__block--column">
                    <label className="form__label"><span className="red">*</span>Current Password</label>
                    <input className="form__input" defaultValue=""/>
                </div>
                <div className="form__block form__block--column">
                    <label className="form__label"><span className="red">*</span>New Password</label>
                    <input className="form__input" defaultValue=""/>
                </div>
                <div className="form__block form__block--column">
                    <label className="form__label"><span className="red">*</span>Confirm Password</label>
                    <input className="form__input" defaultValue=""/>
                </div>
                <div className="btn__group">
                  <div className="btn btn-secondary col-2">Cancel</div>
                  <div className="btn btn-primary col-2">Submit</div>
                </div>               
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;

