import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Entypo from '@expo/vector-icons/Entypo'
import { Ionicons } from '@expo/vector-icons'

import HomeRoutes from './Home.routes'
import Vehicles from '../screens/Vehicles'
import RegisterRoutes from './Register.routes'
import Profile from '../screens/Profile'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createBottomTabNavigator()

export default function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.title,
                    fontSize: 16
                },
                tabBarActiveTintColor: theme.colors.background,
                tabBarInactiveTintColor: '#777777',
                tabBarStyle: {
                    backgroundColor: theme.colors.header,
                    borderTopColor: theme.colors.background,
                },
            }}>

            <Screen
                name='HomeRoutes'
                component={HomeRoutes}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color }) => <Entypo name='home' size={24} color={color} />,
                }}
            />

            <Screen
                name='Vehicles'
                component={Vehicles}
                options={{
                    title: 'Pátio',
                    tabBarIcon: ({ color }) => <Ionicons name='car-sport-sharp' size={30} color={color} />,
                }}
            />

            <Screen
                name='RegisterRoutes'
                component={RegisterRoutes}
                options={{
                    title: 'Cadastros',
                    tabBarIcon: ({ color }) => <Ionicons name='logo-buffer' size={28} color={color} />,
                }}
            />

            <Screen
                name='Profile'
                component={Profile}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <Ionicons name='md-person' size={28} color={color} />,
                }}
            />
        </Navigator>
    )
}