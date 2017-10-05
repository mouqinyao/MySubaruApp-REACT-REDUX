import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './app.css';

import Home from '~/routes/Home/Home';
import Curfew from '~/routes/Curfew/CurfewPanel';

const App = () => (
  <div>
    <header>
      <img src="/app/images/header.svg" className="header__img"/>
    </header>
    <div className="page">
      <div className="vehicle__name">Vehicle Name</div>
      <div className="home-hero"></div>
    </div>    
    <Router>
      <div>
        <ul className="blade">
          <li><Link to="/home">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_remoteService.svg"/>Home
            </div>
          </Link></li>
          <li><Link to="/remoteServices">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_remoteService.svg"/>
              <div>
                SUBARU STARLINK&trade;
                <div className="blade__sub-heading">Remote Services</div>
                <p className="blade__heading-description">Lock, Unlock and Locate Your Subaru</p>
              </div>
              <div className="blade__heading-dots"></div>
            </div>
          </Link></li>
          <li><Link to="/vehicleHealth">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_circleHealth.svg"/>
              <div>
                Vehicle Health
                <p className="blade__heading-description">5 alert(s) for you Subaru</p>
              </div>
              <div className="blade__heading-dots"></div>
            </div>
          </Link></li>
          <li><Link to="/importantMessages">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_circleMessage.png"/>
              <div>
                Messages
                <p className="blade__heading-description">You have 4 message(s)</p>
              </div>
              <div className="blade__heading-dots"></div>
            </div>
          </Link></li>
          <li><Link to="/driverAlerts">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_driverAlert.svg"/>Driver Alerts Settings
            </div>
          </Link></li>
          <li><Link to="/services">
            <div className="blade__heading">
              <img className="blade__icon" src="/app/images/icon_circleService.svg"/>
              <div>
                Services
                <p className="blade__heading-description">Manage your vehicle's services</p>
              </div>
              <div className="blade__heading-dots"></div>
            </div>
          </Link></li>
          <li><Link to="/curfews">
            <div className="blade__heading">Curfews</div>
          </Link></li>
        </ul>

        <Route path="/" component={Home}/>
        <Route path="/curfews" component={Curfew}/>
      </div>
    </Router>
  </div>
)

export default App;