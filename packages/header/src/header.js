import React from "react";
import ReactDOM from 'react-dom';
import './Header.css';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
//import SideNav from 'sidenav/SideNav';

export default function Header (){
  const handleClick = () => {
    store?.setChart1Data();
  }
  const handleChart2Data = () => {   
    store?.setChart2Data();
  }
  return (
    <div>
     <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>  
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div> 

  <div class="data-loader">
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
  rootComponent: Header
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;