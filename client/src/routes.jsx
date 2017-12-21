import React from 'react';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

const routes = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/signup',
    component: SignUpPage
  }
];


const RouteWithSubRoutes = (route) => (
  <div>

  <Route path={route.path} render={props => {
    if (route.getComponent) return route.getComponent;
      return (<route.component {...props}/>)
  }}/>
  </div>
)

const RouteConfig = () => (
  <Router>
    <div>
      <Base/>

      <Route path={'/'} render={props => (
        Auth.isUserAuthenticated() ? (
          <DashboardPage {...props}/>
        ) : (
          <HomePage/>
        )
      )}/>


      {routes.map((route, i) => {
        console.log(route);
          return (
            <RouteWithSubRoutes key={i} {...route}/>
          )
      }

        )}
    </div>
  </Router>
)

export default RouteConfig