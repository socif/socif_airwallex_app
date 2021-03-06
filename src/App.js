import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {loadAirwallex, init, redirectToCheckout} from 'airwallex-payment-elements';
import axios from 'axios'
import { Routes, Route, useParams, BrowserRouter as Router, useRoutes, HashRouter } from 'react-router-dom';
import Succeeded from './Succeeded';
import Failed from './Failed';
import Redirect from './Redirect';

function Airwallex() {
  let { intentId, clientSecret } = useParams();

  useEffect( 
    async () => {
      await loadAirwallex();
      init();
      redirectToCheckout({
        env: 'demo', // Which env('staging' | 'demo' | 'prod') you would like to integrate with
        intent_id: intentId,
        client_secret: clientSecret,
        currency: 'HKD',
        locale: 'en',
        successUrl: 'https://socif.github.io/socif_airwallex_app/#/succeeded',
        failUrl: 'https://socif.github.io/socif_airwallex_app/#/failed',
        applePayRequestOptions: { countryCode: 'HK' }
    });
  },[])
  return (
    <div>
    </div>
  )
}

const App = () => {
  let routes = useRoutes([
    {
      path: "/:intentId/:clientSecret",
      element: <Airwallex />
    },
    {
      path: "/succeeded",
      element: <Succeeded />
    },
    {
      path: "/failed",
      element: <Failed />
    },
    {
      path: "/redirect",
      element: <Redirect />
    }
  ])
  return routes
}

const AppWrapper = () => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}



export default AppWrapper;
