import React,{useState,useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DashboardStack from './DashboardStack';
import auth from "@react-native-firebase/auth"


const Stack = createNativeStackNavigator();

export default function Navigation() {
    const [user, setUser] =useState(false);
    React.useEffect(() => {
        auth().onAuthStateChanged(users => {
            
                if (users) {
                    console.log("user var")
                    setUser(true)
                } else {
                    console.log("yok")
                    setUser(false)
                }
            
        })
    }, [])

    return (
        <NavigationContainer>
            {!user? (<Stack.Navigator>
                <Stack.Screen 
                    name="AuthStack"
                    component={AuthStack}
                />
            </Stack.Navigator>):(
            <Stack.Navigator>
                <Stack.Screen 
                    name="DashboardStack"
                    component={DashboardStack}
                />
            </Stack.Navigator>)
            }
        </NavigationContainer>
    )
}
