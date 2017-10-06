import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './app.css';

import Home from '~/routes/Home/Home';
import RemoteServiceLanding from '~/routes/Landing/RemoteServiceLanding';
import DriverAlertLanding from '~/routes/Landing/DriverAlertLanding';
import CurfewPanel from '~/routes/Curfew/CurfewPanel';

const App = () => ( 
  <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/remoteServiceLanding" component={RemoteServiceLanding}/>
      <Route path="/driverAlertLanding" component={DriverAlertLanding}/>
      <Route path="/createCurfew" component={CurfewPanel}/>
    </div>
  </Router>
)

export default App;