import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewActivity from '../../pages/Dashboard/NewActivity';
import LastActivity from '../../pages/Dashboard/LastActivities/LastActivity';
import ActivityDetail from '../../pages/Dashboard/LastActivities/ActivityDetail';
import Leaderboard from '../../pages/Dashboard/Leaderboard';
import Mainboard from '../../pages/Dashboard/Mainboard';

const Tab = createBottomTabNavigator();

export default function DashboardStack() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="MainboardPage" component={Mainboard} />
        <Tab.Screen name="NewActivityPage" component={NewActivity} />
        <Tab.Screen name="LastActivityPage" component={LastActivity} />
        {/* <Tab.Screen name="ActivityDetail" component={ActivityDetail} /> */}
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
    </Tab.Navigator>
    )
}
