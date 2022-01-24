import React, { useState, useEffect } from 'react';
// import { registerApplication, start } from 'single-spa';
import ReactDOM from 'react-dom';
import Footer from './Footer';

ReactDOM.render(
    <React.Fragment>
            <Footer />
      </React.Fragment>,
    document.getElementById('root')
  );

  
registerApplication(
  'mfMore',
  () => import('mfMore/more'),
  location => location.pathname.startsWith('/')
);

start();
