import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import { Provider } from 'react-redux';
import configureStore from "./store";
import { PersistGate } from 'redux-persist/integration/react'

import AdminLayout from "layouts/Admin.jsx";

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
              <Switch>
                  <Route path="/financial_transfer" render={props => <AdminLayout {...props} />} />
                  <Redirect from="/" to="/financial_transfer/home" />
              </Switch>
          </BrowserRouter>
      </PersistGate>
  </Provider>
  ,document.getElementById("root")
);