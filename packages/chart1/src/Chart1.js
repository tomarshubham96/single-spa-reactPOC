import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';

export default function  Chart1(){
  
  const [data, setData] = React.useState(store.Chart1Data);

  React.useEffect(() => {
    store.subscribe(() => {      
      setData(store.Chart1Data);
    });
    console.log('chart 1  data=>',data)
  }, []);

  const handleClick = () => {    
    console.log(store.count)
  }
    
    return ( 
        <>
        <p onClick={handleClick}>Hello</p>
        <Paper>
            <Chart
              data={data}
            >
                <PieSeries valueField="value" argumentField="argument" />
                <Title text="Studies per day"/>
            </Chart>
        </Paper>
        </>
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
  
  