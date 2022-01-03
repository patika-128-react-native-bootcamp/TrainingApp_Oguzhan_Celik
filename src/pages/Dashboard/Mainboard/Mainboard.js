import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';

export default function Mainboard({navigation}) {
  // function goToNewActivityPage() {
  //   navigation.navigate('NewActivityPage');
  // }
  // function goToLastActivitiesPage() {
  //   navigation.navigate('LastActivityPage');
  // }
  // function goToLeaderboardPage() {
  //   navigation.navigate('Leaderboard');
  // }
  // function Logout() {
  //   auth()
  //     .signOut()
  //     .then(() => console.log('User signed out!'));
  // }
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
}
