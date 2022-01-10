import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import parseActivityData from '../../../utils/parseActivityData';
import auth from '@react-native-firebase/auth';
import LeaderboardCard from '../../../components/Cards/LeaderboardCard';
import LeaderboardLayout from './layout/LeaderboardLayout';

export default function Leaderboard() {
  const [activityList, setActivityList] = useState([]);
  const user = auth().currentUser;
  useEffect(() => {
    const reference = database().ref(`/Leaderboard`);
    reference.on('value', snapshot => {
      const response = snapshot.val();
      const parsedData = parseActivityData(response);
      setActivityList(parsedData);
    });
  }, []);

  console.log(user);

  const renderActivity = ({item}) => <LeaderboardCard activity={item} />;

  return (
    <LeaderboardLayout
      activityList={activityList}
      renderActivity={renderActivity}
    />
  );
}
