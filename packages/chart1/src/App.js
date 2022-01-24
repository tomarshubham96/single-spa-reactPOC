import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import reduxStore from 'store/reduxStore';
import { Provider } from 'react-redux';
import Counter from './counter';
import Chart1 from './chart1';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App(){

    return ( 
      <Provider store={reduxStore}>    
        <Router>          
            <Routes>              
              <Route path="/" element={<Chart1 />} />          
              <Route path="/counter" element={<Counter />} />
            </Routes>
        </Router>
      </Provider>
     );
}

const chart1Lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    domElementGetter
  });
  
  export const bootstrap = chart1Lifecycles.bootstrap;
  export const mount = chart1Lifecycles.mount;
  export const unmount = chart1Lifecycles.unmount;

  function domElementGetter() {
    let el = document.getElementById("chart1");
    if (!el) {
      el = document.createElement('div');
      el.id = 'chart1';
      document.getElementById('chart').appendChild(el);
      //document.body.appendChild(el);
    }
  
    return el;
  }
  
  