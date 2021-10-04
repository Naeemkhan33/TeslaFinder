import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './view/auth/Login';
import SignUp from './view/auth/SignUp';
import Billings from './view/billings/Billings';
import DashBoard from './view/dashboard/DashBoard';
import HomePage from './view/home/HomePage';
import Packages from './view/packages/Packages';
import PastInventory from './view/past-inventory/PastInventory';
import Profile from './view/profile/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={SignUp} />
      <Route exact path='/dashboard' component={DashBoard} />
      <Route exact path='/past-inventory' component={PastInventory} />
      <Route exact path='/billings' component={Billings} />
      <Route exact path='/packages' component={Packages} />
      <Route exact path='/profile' component={Profile} />
    </Switch>
  );
};

export default Routes;
