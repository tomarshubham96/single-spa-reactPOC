import React from "react";
import ReactDOM from 'react-dom';
import './Header.css';
import singleSpaReact from 'single-spa-react';

export default function Header (){
  return (
    <div>
     <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
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