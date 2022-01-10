import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewActivity from '../../pages/Dashboard/NewActivity';
import LastActivity from '../../pages/Dashboard/LastActivities/LastActivity';
import Leaderboard from '../../pages/Dashboard/Leaderboard';
import Mainboard from '../../pages/Dashboard/Mainboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
      options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="home" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#0277bd',
          }}  name="Dashboard" component={Mainboard} />
      <Tab.Screen options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="sticker-plus" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#0277bd',
          }} 
          name="NewActivityPage" component={NewActivity} />
      <Tab.Screen options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="view-headline" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#0277bd',
          }} 
          name="LastActivityPage" component={LastActivity} />
      <Tab.Screen options={{
            tabBarIcon: ({size, color}) => (
              <Icon name="trophy-variant" color={color} size={size} />
            ),
            tabBarActiveTintColor: '#0277bd',
          }} 
          name="Leaderboard" component={Leaderboard} />
    </Tab.Navigator>
  );
}
