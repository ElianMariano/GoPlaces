import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
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
                headerShown: false,
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#FFF',
                tabBarActiveBackgroundColor: '#2C93AA',
                tabBarInactiveBackgroundColor: '#4CB6CE',
                tabBarStyle: {borderTopWidth: 0}
            }}
        >
            <Tab.Screen
                name="NearEvents"
                component={NearEvents}
                options={{
                    tabBarLabel: 'Eventos Próximos',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons size={size} color={color} name='home' />
                        )
                    }
                }}
                />
            <Tab.Screen
                name="EventMap"
                component={EventMap}
                options={{
                    tabBarLabel: 'Mapa',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons size={size} color={color} name='search' />
                        )
                    }
                }}
                />
            
            <Tab.Screen
                name="PersonalInfo"
                component={PersonalInfo}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color, size, focused}) => {
                        return (
                            <Ionicons size={size} color={color} name='person' />
                        )
                    }
                }}
                />
            
        </Tab.Navigator>
    )
}