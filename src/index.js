import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import App from './App';
import Designer from './pages/designer';
import Nav from './pages/nav';
import Footer from './pages/footer';
import ShopNow from './pages/shopNowWidget';

import './index.css';
import './responsive.css';

import reportWebVitals from './reportWebVitals';

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>

        <Nav />

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/our-work">
            <Users />
          </Route>
          <Route path="/designer">
            <Designer />
          </Route>
        </Switch>


        <ShopNow />
        <Footer />

      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
