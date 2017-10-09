import React, { Component } from 'react';

import Heading from '~/components/Heading';
import VehicleBar from '~/components/VehicleBar';

class ManageSecurityQuestion extends Component {

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
              <div className="retailer">
                <p className="retailer__description">For additional security, you will be required to change all three (3) of your security questions. Previously used Security Questions cannot be selected again.</p>
                <div className="form__block form__block--column">
                    <label className="form__label form__label--dark">Security Question 1</label>
                    <input className="form__input" defaultValue="What city were you born in?" disabled/>
                </div>
                <div className="form__block form__block--column">
                    <label className="form__label form__label--dark">Security Question 2</label>
                    <input className="form__input" defaultValue="What was the name of your first pet?" disabled/>
                </div>
                <div className="form__block form__block--column">
                    <label className="form__label form__label--dark">Security Question 3</label>
                    <input className="form__input" defaultValue="What is your mother's maiden name?" disabled/>
                </div>
                <div className="btn btn-primary">Change Security Questions</div>               
              </div>
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default ManageSecurityQuestion;

