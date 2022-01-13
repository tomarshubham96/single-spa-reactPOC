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

export default function Chart2 (){
    const data1 = [
        { x: 1, y: 30 },
        { x: 2, y: 40 },
        { x: 3, y: 5 },
        { x: 4, y: 2 },
        { x: 5, y: 21 },
      ];
    return ( 
        <Paper>
                   <Chart
                       data={data1}
                   >
                   <ArgumentAxis />
                   <ValueAxis />
                   <LineSeries valueField="y" argumentField="x" />
                   </Chart>
                </Paper>
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