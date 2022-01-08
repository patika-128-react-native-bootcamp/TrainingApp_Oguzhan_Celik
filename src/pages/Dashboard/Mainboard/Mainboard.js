import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import MainboardLayout from './layout/MainboardLayout';

export default function Mainboard({navigation}) {
  function Logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <MainboardLayout Logout={Logout}/>
  );
}
