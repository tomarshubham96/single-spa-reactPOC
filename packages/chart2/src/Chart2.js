import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries
} from '@devexpress/dx-react-chart-material-ui';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

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
      <>
        <Paper>
          <Chart
              data={data1}
          >
          <ArgumentAxis />
          <ValueAxis />
          <LineSeries valueField="y" argumentField="x" />
          </Chart>
        </Paper>
      </>
     );
}


const chart2Lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Chart2
});

export const bootstrap = chart2Lifecycles.bootstrap;
export const mount = chart2Lifecycles.mount;
export const unmount = chart2Lifecycles.unmount;