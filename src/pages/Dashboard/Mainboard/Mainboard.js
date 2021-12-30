import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';

export default function Mainboard({navigation}) {
  function goToNewActivityPage() {
    navigation.navigate('NewActivityPage');
  }
  function goToLastActivitiesPage() {
    navigation.navigate('LastActivityPage');
  }
  function goToLeaderboardPage() {
    navigation.navigate('Leaderboard');
  }
  function Logout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  return (
    <View>
      <View>
        <Button text={'New Activity'} onPress={goToNewActivityPage} />
        <Button text={'Last Activities'} onPress={goToLastActivitiesPage} />
        <Button text={'Leaderboard'} onPress={goToLeaderboardPage} />
        <Button text={'Çıkış Yap'} onPress={Logout} />
      </View>
    </View>
  );
}
