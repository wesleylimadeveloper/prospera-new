import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Vehicles from '../screens/Vehicles'
import Clients from '../screens/Clients'
import VehicleRegistration from '../screens/VehicleRegistration'
import RegisterRoutes from '../routes/Register.routes'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createNativeStackNavigator()

export default function HomeRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.header,
                },
                headerTintColor: theme.colors.background,
                headerTitleStyle: {
                    fontFamily: theme.fonts.title,
                    fontSize: 18,
                },
            }}
        >
            <Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Clients'
                component={Clients}
                options={{
                    headerTitle: 'Clientes'
                }}
            />

            <Screen
                name='Vehicles'
                component={Vehicles}
                options={{
                    headerTitle: 'Veículos'
                }}
            />

            <Screen
                name='VehicleRegistration'
                component={VehicleRegistration}
                options={{
                    headerTitle: 'Cadastro de veículo'
                }}
            />

            <Screen
                name='RegisterRoutes'
                component={RegisterRoutes}
                options={{
                    headerTitle: 'Cadastro de veículo'
                }}
            />
        </Navigator>
    )
}