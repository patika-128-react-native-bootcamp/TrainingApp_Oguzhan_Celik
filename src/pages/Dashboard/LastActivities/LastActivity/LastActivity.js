import React, {useState, useEffect} from 'react';
import {View, Button, Text, FlatList} from 'react-native';
import LastActivityLayout from './layout/LastActivityLayout';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseActivityData from '../../../../utils/parseActivityData';
import ActivityCard from '../../../../components/Cards/ActivityCard/';

export default function LastActivity() {
  const [userid, setUserid] = useState(auth().currentUser.uid);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    const reference = database().ref(`/Users/${userid}`);
    reference.on('value', snapshot => {
      const response = snapshot.val();
      console.log(response);
      const parsedData = parseActivityData(response);
      setActivityList(parsedData);
    });
  }, []);

  const renderActivity = ({item}) => <ActivityCard activity={item} />;

  return (
    <View>
      <FlatList data={activityList} renderItem={renderActivity} />
      <Text>Asd</Text>
      <LastActivityLayout />
    </View>
  );
}
