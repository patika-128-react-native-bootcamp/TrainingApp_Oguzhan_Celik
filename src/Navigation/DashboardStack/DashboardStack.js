import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NewActivity from '../../pages/Dashboard/NewActivity';
import LastActivity from '../../pages/Dashboard/LastActivities/LastActivity';
import ActivityDetail from '../../pages/Dashboard/LastActivities/ActivityDetail';
import Leaderboard from '../../pages/Dashboard/Leaderboard';
import Mainboard from '../../pages/Dashboard/Mainboard';

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainboardPage" component={Mainboard} />
        <Stack.Screen name="NewActivityPage" component={NewActivity} />
        <Stack.Screen name="LastActivityPage" component={LastActivity} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
    )
}
