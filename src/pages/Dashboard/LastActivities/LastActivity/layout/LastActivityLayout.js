import React from 'react';
import {View, Text, FlatList} from 'react-native';

export default function LastActivityLayout({activityList, renderActivity}) {
  return (
    <View>
      <FlatList data={activityList} renderItem={renderActivity} />
    </View>
  );
}
