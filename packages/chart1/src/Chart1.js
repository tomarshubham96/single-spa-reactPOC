import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';
import store from 'store/store';

export default function  Chart1(){
  
  const [data, setData] = React.useState(store.Chart1Data);
  const [userInfo,setuserInfo] = React.useState({});

  React.useEffect(() => {
    store.subscribe(() => {      
      setData(store.Chart1Data);
    });
    console.log('chart 1  data=>',data)
  }, []);

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
  