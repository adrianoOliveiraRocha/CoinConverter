import React from 'react';
import DrawerNavigation from './components/navigator/DrawerNavigation';
import CheckInternet from './helpers/CheckInternet';
import NoConnected from './components/screens/NotCennected';

export default function App() {
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  CheckInternet().then(res => {
    setConnectionStatus(res);
  });

  return (
    connectionStatus 
    ? (<DrawerNavigation />)
    : (<NoConnected />)
  );

}