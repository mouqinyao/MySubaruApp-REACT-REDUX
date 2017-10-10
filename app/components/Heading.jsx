import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';

import Menu from '~/components/Menu';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this); 

    this.state = {
      isActive: false,
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

  toggleMenu(e) {
    e.preventDefault();
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  }

  componentWillMount() {    
    const path = this.props.history.location.pathname;   
    path == '/home' || path == '/' ? this.setState({goBackIsActive: false}) : this.setState({goBackIsActive: true});
  }

  render() {
    const isMenuActive = this.state.isActive;

    return (
      <div>
      	<header>
  	      <img src="/app/images/header.svg" className="header__img" onClick={this.backToHome}/>
  	      <img src="/app/images/icon-back.svg" className={this.state.goBackIsActive ? 'header__icon--active' : 'header__icon--inactive'} onClick={this.goBack}/>
          <div className="header__menu" onClick={this.toggleMenu}> 	      	
            {isMenuActive ? (
              <div>
                <div className="header__toggle">
                  <span className="header__toggle-close"></span>
                  <span className="header__toggle-close"></span>
                  <span className="header__toggle-close"></span>
                </div>
                <span className="header__menu-text">CLOSE</span>
              </div>
              ) : (
              <div>
                <div className="header__toggle">
                  <span className="header__toggle-line"></span>
                  <span className="header__toggle-line"></span>
                  <span className="header__toggle-line"></span>
                </div>
                <span className="header__menu-text">MENU</span>
              </div>
            )}
  	      </div>
  	    </header>
        <div className={this.state.isActive ? 'menu--active': 'menu--inactive'}>
          <Menu />
        </div>
      </div>
    );
  }
}

export default withRouter(Heading);