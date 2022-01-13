import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import CreateAccount from '../pages/CreateAccount';
import EventTabs from './EventTabs';
import NewEvent from '../pages/NewEvent';
import NewPromotion from '../pages/NewPromotion';
import Reserve from '../pages/Reserve';
import Promotion from '../pages/Promotion';

const Stack = createNativeStackNavigator()

export default function AppStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode='none'
                screenOptions={{
                headerShown: false
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateAccount" component={CreateAccount} />
                <Stack.Screen name="EventTabs" component={EventTabs} />
                <Stack.Screen name="NewEvent" component={NewEvent} />
                <Stack.Screen name="NewPromotion" component={NewPromotion} />
                <Stack.Screen name="Reserve" component={Reserve} />
                <Stack.Screen name="Promotion" component={Promotion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}