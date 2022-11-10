import * as React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { AddDonation, Home, Profile} from "./screens/";
import Register from './screens/Register';
import Login from './screens/Login';
import Splash from './screens/Splash';
import AddCard from './screens/AddCard';
import Projects from './screens/Projects';
import MyProjects from './screens/MyProjects';
import ViewProject from './screens/ViewProject';
import AddProject from './screens/AddProject';
import EditProject from './screens/EditProject';
import MainContainer from './navigation/MainContainer';

// const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Splash'}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddDonation" component={AddDonation} />
                <Stack.Screen name="AddCard" component={AddCard} />
                <Stack.Screen name="Projects" component={Projects} />
                <Stack.Screen name="MyProjects" component={MyProjects} />
                <Stack.Screen name="ViewProject" component={ViewProject} />
                <Stack.Screen name="AddProject" component={AddProject} />
                <Stack.Screen name="EditProject" component={EditProject} />
            </Stack.Navigator>
        </NavigationContainer>
    // <NavigationContainer>
    //         <Stack.Navigator
    //             screenOptions={{
    //                 headerShown: false
    //             }}
    //             initialRouteName={'Splash'}
    //         >
    //             <Stack.Screen name="Splash" component={Splash} />
    //             <Stack.Screen name="Login" component={Login} />
    //             <Stack.Screen name="Register" component={Register} />
    //             <Stack.Screen name="Home" component={Home} />
    //             <Stack.Screen name="AddDonation" component={AddDonation} />
    //             <Stack.Screen name="AddCard" component={AddCard} />
    //             <Stack.Screen name="Profile" component={Profile} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // <MainContainer/>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#3A74CB'
  }

});
