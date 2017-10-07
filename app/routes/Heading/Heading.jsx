import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack(e) {
  	e.preventDefault();
    this.props.history.goBack();
  }

  render() {   
    return (
    	<header>
	      <img src="/app/images/header.svg" className="header__img"/>
	      <img src="/app/images/icon-back.svg" className="header__icon" onClick={this.goBack}/>
	      <div className="header__menu">
	      	<div className="header__toggle">
	      		<span className="header__toggle-line"></span>
	      		<span className="header__toggle-line"></span>
	      		<span className="header__toggle-line"></span>
	      	</div>
	      	<span className="header__menu-text">MENU</span>
	      </div>
	    </header>
    );
  }
}

export default withRouter(Heading);