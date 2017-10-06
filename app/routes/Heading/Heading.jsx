import React, { Component, PropTypes } from 'react';

class Heading extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
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
    );
  }
}

export default Heading;