import React from "react";
import ReactDOM from 'react-dom';
import reduxStore from 'store/reduxStore';
import { Provider } from 'react-redux';
import './Footer.css';
import singleSpaReact from 'single-spa-react';
import Main from "./main";

export default function Footer (){
  return (
    <Provider store={reduxStore}>
      <Main />
    </Provider>
  );
}

const footerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Footer,
  domElementGetter
});

export const bootstrap = footerLifecycles.bootstrap;
export const mount = footerLifecycles.mount;
export const unmount = footerLifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("footer");
  if (!el) {
    el = document.createElement('div');
    el.id = 'footer';
    //document.getElementById('third').appendChild(el);
    document.body.appendChild(el);
  }

  return el;
}