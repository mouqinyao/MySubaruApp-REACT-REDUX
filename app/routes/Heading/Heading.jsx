import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.backToHome = this.backToHome.bind(this); 

    this.state = {
      goBackIsActive: false
    }
  }

  goBack(e) {
  	e.preventDefault();
    this.props.history.goBack();
  }

  backToHome(e) {
    e.preventDefault();
    this.props.history.push('/home');
  }

  componentWillMount() {    
    const path = this.props.history.location.pathname;   
    path == '/home' ? this.setState({goBackIsActive: false}) : this.setState({goBackIsActive: true});
  }

  render() {  
    return (
      <div>
      	<header>
  	      <img src="/app/images/header.svg" className="header__img" onClick={this.backToHome}/>
  	      <img src="/app/images/icon-back.svg" className={this.state.goBackIsActive ? 'header__icon--active' : 'header__icon--inactive'} onClick={this.goBack}/>
          <div className="header__menu" onClick={this.props.toggleMenu}>
  	      	<div className="header__toggle">
  	      		<span className="header__toggle-line"></span>
  	      		<span className="header__toggle-line"></span>
  	      		<span className="header__toggle-line"></span>
  	      	</div>
  	      	<span className="header__menu-text">MENU</span>
  	      </div>
  	    </header>
      </div>
    );
  }
}

export default withRouter(Heading);