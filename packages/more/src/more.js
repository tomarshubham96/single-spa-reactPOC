import React from "react";
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import reduxStore from 'store/reduxStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Onemore from './onemore';
import './more.css';


export default function More (){
  const [value,setvalue] = React.useState('1');
  return (  
    <Provider store={reduxStore}>
    <Router>
      <Routes>
          <Route path="/footer/morefooter" element={
            <div className="footer">
              <p>More Footer {value}</p>
            </div>
          } />
          <Route path="/morefooter2" element={<Onemore />} />
      </Routes>
    </Router>
    </Provider>
  );
}

const moreLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: More,
  domElementGetter
});

export const bootstrap = moreLifecycles.bootstrap;
export const mount = moreLifecycles.mount;
export const unmount = moreLifecycles.unmount;

function domElementGetter() {
  let el = document.getElementById("more");
  if (!el) {
    el = document.createElement('div');
    el.id = 'more';
    //document.getElementById('third').appendChild(el);
    document.body.appendChild(el);
  }

  return el;
}