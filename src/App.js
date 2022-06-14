import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {loadAirwallex, init, redirectToCheckout} from 'airwallex-payment-elements';
import axios from 'axios'
import { Routes, Route, useParams, BrowserRouter as Router, useRoutes, HashRouter } from 'react-router-dom';
import Succeed from './Succeed';
import Failed from './Failed';

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
        successUrl: 'https://socif.co',
        failUrl: 'https://google.com',
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
      path: "/succeed",
      element: <Succeed />
    },
    {
      path: "/failed",
      element: <Failed />
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
