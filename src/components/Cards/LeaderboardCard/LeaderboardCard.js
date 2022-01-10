import React from 'react';
import {View, Text} from 'react-native';
import styles from './LeaderboardCard.styles';

export default function LeaderboardCard({activity}) {

  return (
    <View style={styles.container}>
      <Text style={styles.distance}>{activity.username}</Text>
      <Text style={styles.distance}>
        Distance:{Math.floor(activity.distance)}
      </Text>
    </View>
  );
}
