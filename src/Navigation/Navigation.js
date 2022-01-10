import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DashboardTab from './DashboardTab';
import auth from '@react-native-firebase/auth';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [user, setUser] = useState(false);
  React.useEffect(() => {
    auth().onAuthStateChanged(users => {
      if (users) {
        console.log('user var');
        setUser(true);
      } else {
        console.log('yok');
        setUser(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="DashboardTab" component={DashboardTab} />
        </Stack.Navigator>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
