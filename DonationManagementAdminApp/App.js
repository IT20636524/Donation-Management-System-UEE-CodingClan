import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { Dashboard, Login, PaymentDashboard, Register, Splash,EventDashboard, CompleteEvent, Event} from "./screens/";
import { Dashboard, EventManagerPayments, Login, OrgPayments, PaymentDashboard, Register, Splash } from "./screens/";

const Stack = createStackNavigator();

const App = () => {
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
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="PaymentDashboard" component={PaymentDashboard} />
                <Stack.Screen name="EventDashboard" component={EventDashboard} />
                <Stack.Screen name="CompleteEvent" component={CompleteEvent} />
                <Stack.Screen name="Event" component={Event} />
                <Stack.Screen name="OrgPayments" component={OrgPayments} />
                <Stack.Screen name="EventManagerPayments" component={EventManagerPayments} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;