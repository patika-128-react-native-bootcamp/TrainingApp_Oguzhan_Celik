import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function LeaderboardLayout({activityList, renderActivity}) {
  return (
    <View>
      <FlatList data={activityList} renderItem={renderActivity} />
    </View>
  );
}
