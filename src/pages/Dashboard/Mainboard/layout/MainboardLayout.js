import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../../../components/Button';
import styles from './MainboardLayout.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MainboardLayout({Logout,username,distance,time,number}) {
  return (
    
    <View style={styles.container}>
    {username && 
      <>
      <View style={styles.text_container}>
          <Text style={styles.text_hello}>Hello,</Text>
          <Text style={styles.text_name}>{username}</Text>
          <Text style={styles.text_stats}>Total Stats</Text>
      </View>
      <View style={styles.stats_container}>
        <View style={styles.distance_container}>
          <Icon style={styles.icon_distance} name="google-street-view" size={30} color="#0A0000"/>
          <Text style={styles.text_distance}>{Math.floor(distance)}</Text>
          <Text style={styles.text_km}>km</Text>
        </View>
        <View style={styles.time_km_container}>
        <View style={styles.time_container}>
          <Icon style={styles.icon_time} name="timer-sand" size={30} color="#0A0000"/>
          <View style={styles.time_total_container}>
          <Text style={styles.text_time}>{Math.floor(time)}s</Text>
          <Text style={styles.text_total_time}>total time</Text>
          </View>
        </View>
        <View style={styles.exercises_container}>
          <Icon style={styles.icon_exercises} name="arm-flex" size={30} color="#0A0000"/>
          <View style={styles.exercies_total_container}>
          <Text style={styles.text_exercises}>{number}</Text>
          <Text style={styles.text_total_exercises}>total activity</Text>
          </View>
        </View>
        
        </View>
        
      </View>
      <Button text={'Signed out'} onPress={Logout} style={styles.button} />
      </>}
    </View>
  );
}
