import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Settings from './screens/Settings'
import Donations from './screens/Donations'

//Screen names
const homeName = 'Home';
const profileName = 'Profile';
const donationsName = 'Donations';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if(rn === profileName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }else if(rn === donationsName) {
                        iconName = focused ? 'heart-circle' : 'heart-circle-outline'
                    }else if(rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'white',
                activeBackgroundColor:'#06134B',
                inactiveBackgroundColor:'#06134B',
                labelStyle:{paddingBottom:5},
            }}
            >

            <Tab.Screen name={homeName} component={Home}/>
            <Tab.Screen name={profileName} component={Profile}/>
            <Tab.Screen name={donationsName} component={Donations}/>
            <Tab.Screen name={settingsName} component={Settings}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}