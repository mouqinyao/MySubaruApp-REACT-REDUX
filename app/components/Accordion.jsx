import React, { Component } from 'react';

class Accordion extends Component {

  constructor(props) {
    super(props);   
    this.viewHiddenContent = this.viewHiddenContent.bind(this);

    this.state = {
      isExpanded : false
    }
  }

  viewHiddenContent(e) {
    e.preventDefault();
    const currentStatus = this.state.isExpanded;  
    this.setState({ isExpanded: !currentStatus });
  }

  render() {
    return (
      <div className="accordion">
        <div className="accordion__list">
          <div className="accordion__title" onClick={this.viewHiddenContent}>
            <div className="accordion__title-text">What's Covered?</div>
            <div className="accordion__arrow">
              <span className="accordion__arrow-line"></span>
              <span className="accordion__arrow-line accordion__arrow-line--right"></span>
            </div>
          </div>
          <div className={this.state.isExpanded? 'accordion__content--is-active': 'accordion__content'}>       
            <div className="accordion__content-title">What Is Covered</div>
            <p className="accordion__content-description">Subaru's basic warranty covers any repairs needed to correct defects in material or workmanship reported during the applicable warranty period and which occur under normal use:</p>
            <ul className="accordion__content-list">
              <li>In any part of your Subaru</li>
              <li>In any Genuine Subaru Optional Accessories installed on the car prior to delivery</li>
            </ul>
          </div>
        </div>
        <div className="accordion__list">
          <div className="accordion__title">
            <div className="accordion__title-text">What does the warranty period begin?</div>
            <div className="accordion__arrow">
              <span className="accordion__arrow-line"></span>
              <span className="accordion__arrow-line accordion__arrow-line--right"></span>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">Warranty Period</div>
            <p className="accordion__content-description">Warranty coverage begins on the date the car is delivered to the first retail purchaser. If the car was used as a demonstrator or company vehicle before being sold at retail, warranty coverage begins on the date the car was first placed in such service.</p>
          </div>
        </div>
        <div className="accordion__list">
          <div className="accordion__title">
            <div className="accordion__title-text">When These Warranties Apply</div>
            <div className="accordion__arrow">
              <span className="accordion__arrow-line"></span>
              <span className="accordion__arrow-line accordion__arrow-line--right"></span>
            </div>
          </div>
          <div className="accordion__content">
            <div className="accordion__content-title">What Is Covered</div>
            <p className="accordion__content-description">These warranties are made by Subaru of America, Inc. (except in Hawaii) and apply only if the car was imported or distributed by Subaru of America, Inc. and sold to the first retail purchaser by an Authorized Subaru Dealer in the United States.</p>
            <p className="accordion__content-description">Any and all repairs must be performed by an authorized Subaru dealer located in the United States. Every owner of the car during the warranty period shall be entitled to the benefits of these warranties. In emergency situations where no Subaru authorized dealer is available, minor repairs can be made by any available service facility. Subaru of America will pay the cost of having your car towed to the nearest authorized Subaru dealer if it cannot be driven due to a defect covered by these warranties. please consult with your Subaru dealer about these specific warranty conditions.</p>
          </div>
        </div>
      </div>            
    );
  }
}

export default Accordion;

