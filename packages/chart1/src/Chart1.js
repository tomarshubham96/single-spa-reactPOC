import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import singleSpaReact from 'single-spa-react';

export default function  Chart1(){
    const data = [
        { argument:'Monday', value:10 },
        { argument:'Tuesday', value:40 },
        { argument:'Wednesday', value:10 },
        { argument:'Thursday', value:20 },
        { argument:'Friday', value:20 },
      ];
    return ( 
        <Paper>
                     <Chart
                        data={data}
                      >
                         <PieSeries valueField="value" argumentField="argument" />
                         <Title text="Studies per day"/>
                     </Chart>
                </Paper>
     );
}

const chart1Lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Chart1
  });
  
  export const bootstrap = chart1Lifecycles.bootstrap;
  export const mount = chart1Lifecycles.mount;
  export const unmount = chart1Lifecycles.unmount;
  