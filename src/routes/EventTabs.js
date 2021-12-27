import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import NearEvents from '../pages/NearEvents'
import EventMap from '../pages/EventMap'
import PersonalInfo from '../pages/PersonalInfo'

const Tab = createBottomTabNavigator()

export default function EventTabs(){
    return (
        <Tab.Navigator
            headerMode='none'
            screenOptions={{
            headerShown: false
            }}
        >
            <Tab.Screen name="NearEvents" component={NearEvents} />
            <Tab.Screen name="EventMap" component={EventMap} />
            <Tab.Screen name="PersonalInfo" component={PersonalInfo} />
        </Tab.Navigator>
    )
}