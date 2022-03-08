import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home'
import CreateAccount from '../pages/CreateAccount';
import EventTabs from './EventTabs';
import NewEvent from '../pages/NewEvent';
import Reserve from '../pages/Reserve';
import Promotion from '../pages/Promotion';
import Invitation from '../pages/Invitation'
import ChangeData from '../pages/ChangeData'
import Maps from '../pages/Maps';

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

                <Stack.Screen
                    name="Invitation"
                    component={Invitation}
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
                    name="ChangeData"
                    component={ChangeData}
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