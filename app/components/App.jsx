import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import '~/css/app.css';
import '~/css/home.css';
import '~/css/landing.css';
import '~/css/panel.css';
import '~/css/retailer.css';
import '~/css/curfew.css';

import Home from '~/routes/Home/Home';
import VehicleInformation from '~/routes/Vehicle/VehicleInformation';
import RemoteServiceLanding from '~/routes/Landing/RemoteServiceLanding';
import DriverAlertLanding from '~/routes/Landing/DriverAlertLanding';
import MessageLanding from '~/routes/Landing/MessageLanding';
import SupportLanding from '~/routes/Landing/SupportLanding';
import MyRetailer from '~/routes/Retailer/MyRetailer';
import FindRetailer from '~/routes/Retailer/FindRetailer';
import AuthorizedRetailer from '~/routes/Retailer/AuthorizedRetailer';
import RoadsideAssistance from '~/routes/Support/RoadsideAssistance';
import StarlinkCustomerCare from '~/routes/Support/StarlinkCustomerCare';
import CustomerCare from '~/routes/Support/CustomerCare';

import CurfewPanel from '~/routes/Curfew/CurfewPanel';
import CurfewReview from '~/routes/Curfew/CurfewReview';

import PinPanel from '~/routes/Panel/PinPanel';

const App = () => ( 
  <Router>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/vehicleInformation" component={VehicleInformation}/>
      <Route path="/remoteServiceLanding" component={RemoteServiceLanding}/>
      <Route path="/driverAlertLanding" component={DriverAlertLanding}/>
      <Route path="/supportLanding" component={SupportLanding}/>
      <Route path="/messageLanding" component={MessageLanding}/>
      <Route path="/myRetailer" component={MyRetailer}/>
      <Route path="/findRetailer" component={FindRetailer}/>
      <Route path="/authorizedRetailer" component={AuthorizedRetailer}/>
      <Route path="/roadsideAssistance" component={RoadsideAssistance}/>
      <Route path="/starlinkCustomerCare" component={StarlinkCustomerCare}/>
      <Route path="/customerCare" component={CustomerCare}/>

      <Route path="/createCurfew" component={CurfewPanel}/>
      <Route path="/reviewCurfew" component={CurfewReview}/>
      <Route path="/authorize" component={PinPanel}/>     
    </div>
  </Router>
)

export default App;