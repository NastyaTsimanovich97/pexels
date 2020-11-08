import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CATEGORY, DEFAULT } from './constants/routes';

import MainPage from './pages/MainPage';
import CategoriesPage from './pages/CategoriesPage';


import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={DEFAULT} component={MainPage} />
        <Route exact path={CATEGORY} component={CategoriesPage} />
      </Switch>
    </Router>
  );
}

export default App;
