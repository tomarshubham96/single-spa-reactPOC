import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Chart2 (){
  const [data1, setData1] = React.useState(store.Chart2Data);
  const [users, setUsers] = React.useState(store.users);
  React.useEffect(() => {
    store.subscribe(() => {
      setData1(store.Chart2Data);
      setUsers(store.users); //Get Users Data
    });
  }, []);

    return ( 
      <Router basename='/'>                
          <Paper>
              <Chart data={data1}>
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries valueField="y" argumentField="x" />              
              <Title text="User Data"/>
              </Chart>
            </Paper>
      </Router>
     );
}


const chart2Lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Chart2,
  domElementGetter
});

export const bootstrap = chart2Lifecycles.bootstrap;
export const mount = chart2Lifecycles.mount;
export const unmount = chart2Lifecycles.unmount;


function domElementGetter() {
  let el = document.getElementById("chart2");
  if (!el) {
    el = document.createElement('div');
    el.id = 'chart2';
    document.getElementById('chart').appendChild(el);
    //document.body.appendChild(el);
  }

  return el;
}