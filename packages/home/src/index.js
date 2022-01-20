import { registerApplication, start } from 'single-spa';

registerApplication(
  'chart1',
  () => import('chart1/Chart1'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'chart2',
  () => import('chart2/Chart2'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'header',
  () => import('header/Header'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'sidenav',
  () => import('sidenav/SideNav'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'tablecomp',
  () => import('tablecomp/Table1'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'footer',
  () => import('footer/Footer'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'inputuser',
  () => import('inputuser/inputuser'),
  location => location.pathname.startsWith('/')
);

registerApplication(
  'showuser',
  () => import('showuser/showuser'),
  location => location.pathname.startsWith('/')
);

start();
