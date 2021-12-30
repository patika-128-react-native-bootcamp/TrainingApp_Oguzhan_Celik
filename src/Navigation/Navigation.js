import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DashboardStack from './DashboardStack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="AuthStack"
                    component={AuthStack}
                />
                <Stack.Screen 
                    name="DashboardStack"
                    component={DashboardStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
