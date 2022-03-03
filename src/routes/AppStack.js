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
import Maps from '../pages/Maps';
import Maps2 from '../pages/Maps2';

const Stack = createNativeStackNavigator()

export default function AppStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="EventTabs"
                    component={EventTabs}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="NewEvent"
                    component={NewEvent}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="NewPromotion"
                    component={NewPromotion}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="Reserve"
                    component={Reserve}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="Maps"
                    component={Maps}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="Maps2"
                    component={Maps2}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
                <Stack.Screen
                    name="Promotion"
                    component={Promotion}
                    options={{
                        title: "GOPlaces",
                        headerStyle: {
                            backgroundColor: '#2C93AA',
                            padding: 12,
                            margin: 0,
                            width: '100%',
                            marginBottom: 6
                        },
                        headerTintColor: '#FFF',
                        headerTitleStyle: {
                            fontSize: 28,
                            textAlign: 'left',
                            fontWeight: 'bold'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

/*
headerMode='none'
                screenOptions={{
                headerShown: false
                }}
*/