import React, { Component, PropTypes } from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);

  }

  render() {   
    return (
    	<div className="menu">
    		<ul className="menu__list">
    			<li>Home</li>
    			<li>SUBARU STARLINK&trade; Services</li>
    			<li>Roadside Assistance</li>
    			<li>Service</li>
    			<li>My Profile</li>
    			<li>My Vehicles</li>
    			<li>Warranty &amp; Extended Services</li>
    			<li>How To and Info</li>
    			<li>Support</li>
    			<li>Legal Disclaimers</li>
    			<li>Log Out</li>
    		</ul>
    	</div>
    );
  }
}

export default Menu;