import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../pages/Auth/Login';
import Signup from '../../pages/Auth/Signup';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignupPage" component={Signup} />
    </Stack.Navigator>
  );
}
