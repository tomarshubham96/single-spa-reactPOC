import React from 'react';

export default function App(){
    return(   
        <> 
        <div id="header">
        </div> 
        <div style={{display: 'flex'}}>            
            <div id="sidenav"></div>
            <div style={{width: '100%',display: 'flex', flexWrap: 'wrap'}}>                          
                <div id="chart" style={{width: '100%',display: 'flex'}}>
                    <div id="chart1" style={{width: '50%'}}></div>
                    <div id="chart2" style={{width: '50%'}}></div>
                </div>
                <div id="single-spa-application:tablecomp" style={{width: '50%'}}></div>
                <div id="single-spa-application:showuser" style={{width: '50%'}}></div>
            </div>            
            
        </div>
        </>
        
    );
}