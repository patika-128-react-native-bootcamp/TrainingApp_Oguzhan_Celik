import React from 'react';
import Navigation from './Navigation';
import SplashScreen from 'react-native-splash-screen';

export default function Router() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigation />;
}
