import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import ListAll from '../containers/ListAll';
import ListTVById from '../containers/ListTVById';

function AppRouter() {
  return (
    <Router>
      <Route path="/list" exact component={ListAll} />
      <Route path="/list/:id" component={ListTVById} />
    </Router>
  );
}

export default AppRouter;