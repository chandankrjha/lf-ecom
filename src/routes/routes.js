import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import ListAll from '../containers/ListAll';
import ListTVById from '../containers/ListTVById';
import Login from '../containers/login/LoginUsingHooks';
import ObjById from '../containers/ObjById';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/list" exact component={ListAll} />
      <Route path="/list/:id" component={ListTVById} />
      <Route path="/obj" component={ObjById} />
    </Router>
  );
}

export default AppRouter;