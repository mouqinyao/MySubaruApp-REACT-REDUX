import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';

import Home from '~/routes/Home/Home';
import VehicleInformation from '~/routes/Vehicle/VehicleInformation';
import RemoteServiceLanding from '~/routes/Landing/RemoteServiceLanding';
import DriverAlertLanding from '~/routes/Landing/DriverAlertLanding';
import MessageLanding from '~/routes/Landing/MessageLanding';

import CurfewPanel from '~/routes/Curfew/CurfewPanel';
import CurfewReview from '~/routes/Curfew/CurfewReview';

import PinPanel from '~/routes/Panel/PinPanel';

const App = () => ( 
  <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/vehicleInformation" component={VehicleInformation}/>
      <Route path="/remoteServiceLanding" component={RemoteServiceLanding}/>
      <Route path="/driverAlertLanding" component={DriverAlertLanding}/>
      <Route path="/messageLanding" component={MessageLanding}/>
      <Route path="/createCurfew" component={CurfewPanel}/>
      <Route path="/reviewCurfew" component={CurfewReview}/>
      <Route path="/authorize" component={PinPanel}/>     
    </div>
  </Router>
)

export default App;