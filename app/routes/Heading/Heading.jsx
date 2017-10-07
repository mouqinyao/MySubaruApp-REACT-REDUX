import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  goBack(e) {
  	e.preventDefault();
    this.props.history.goBack();
  }

  backToHome(e) {
    e.preventDefault();
    this.props.history.push('/home');
  }

  render() {   
    return (
    	<header>
	      <img src="/app/images/header.svg" className="header__img" onClick={this.backToHome}/>
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