import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './app.css';

import Home from '~/routes/Home/Home';
import CurfewPanel from '~/routes/Curfew/CurfewPanel';

const App = () => ( 
  <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/curfews" component={CurfewPanel}/>
    </div>
  </Router>
)

export default App;