import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Master from "./components/pages/master"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Pay from './components/pages/pay';
import Prin from './components/pages/prin';
import Login from './components/pages/login';
import Register from './components/pages/register';
import LandingPage from './components/pages/landing';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/landing",
    element: <LandingPage/>,
  },
  {
    path: "/master",
    element: <Master/>,
  },
  {
    path: "/payment",
    element: <Pay/>,
  },
  {
    path: "/print",
    element: <Prin/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
