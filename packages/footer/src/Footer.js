import React from "react";
import ReactDOM from 'react-dom';
import './Footer.css';
import singleSpaReact from 'single-spa-react';

export default function Footer (){
  return (
    <div class="footer">
         <p>Footer</p>
    </div>
  );
}

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;