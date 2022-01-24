import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
// import history from './history';

export default function Header (props){

  const [location,setLocation] = React.useState('/');
  
  const handleClick = () => {
    store?.setChart1Data();
  }
  const handleChart2Data = () => {   
    store?.setChart2Data();
  }

  const handleNav = () => {
    
    setTimeout(()=>{
      setLocation(window.location.pathname);
    },[200])
  }

  return (
    <div>
      <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>  
      <div className="header-right">
    <Router>
      <Link to={'/'} onClick={handleNav} className={location === '/' && 'active'}>Home</Link>
      <Link to={'/counter'} onClick={handleNav} className={location === '/counter' && 'active'}>Counter</Link>
      <Link to={'/footer/morefooter'} onClick={handleNav} className={location === '/footer/morefooter' && 'active'}>More Footer 1</Link>
      <Link to={'/morefooter2'} className={location === '/morefooter2' && 'active'}>More Footer 2</Link>
    </Router>
  </div> 

  <div className="data-loader">
    <div onClick={handleClick} style={{cursor: "pointer"}}>Load Chart 1 Data</div>
    <div onClick={handleChart2Data} style={{cursor: "pointer"}}>Load Chart 2 Data</div>
  </div>

</div>
    </div>
  );
}

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
  domElementGetter
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("header");
  if (!el) {
    el = document.createElement('div');
    el.id = 'header';
    document.body.appendChild(el);
  }

  return el;
}
