import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../../components/Button';
import styles from './MainboardLayout.styles';

export default function MainboardLayout({Logout,username,distance}) {
  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
          <Text style={styles.text_hello}>Hello,</Text>
          <Text style={styles.text_name}>{username}</Text>
          <Text style={styles.text_stats}>Total Stats</Text>
      </View>
      <View style={styles.stats_container}>
        <View style={styles.distance_container}>
          
          <Text>{Math.floor(distance)}</Text>
          <Text>KM</Text>
        </View>
      </View>
      <Button text={'Signed out'} onPress={Logout} style={styles.button} />
    </View>
  );
}
