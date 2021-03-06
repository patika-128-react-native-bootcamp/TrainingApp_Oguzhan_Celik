import React from 'react';
import {View, Text} from 'react-native';
import styles from './ActivityCard.styles';

export default function ActivityCard({activity}) {
  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.distance}>
          Distance:{Math.floor(activity.distance)}
        </Text>
        <Text style={styles.time}>Time:{activity.time}</Text>
        <Text style={styles.time}>Speed: 
          {Math.floor(activity.distance / activity.time)} km/s
        </Text>
      </View>
      <Text style={styles.date}>{activity.date}</Text>
    </View>
  );
}
