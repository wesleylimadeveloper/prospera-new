import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import ClientsVehicles from '../screens/ClientsVehicles'
import Clients from '../screens/Clients'
import ClientRegistration from '../screens/ClientRegistration'
import Vehicles from '../screens/Vehicles'
import VehicleRegistration from '../screens/VehicleRegistration'
import Patio from '../screens/Patio'
import Register from '../screens/Register'
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
                    fontSize: 20,
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
                name='ClientsVehicles'
                component={ClientsVehicles}
                options={{
                    headerTitle: 'Clientes e veículos'
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
                name='ClientRegistration'
                component={ClientRegistration}
                options={{
                    headerTitle: 'Cadastro de cliente'
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
                name='Patio'
                component={Patio}
                options={{
                    headerTitle: 'Pátio'
                }}
            />

            <Screen
                name='Register'
                component={Register}
                options={{
                    headerTitle: 'Cadastros'
                }}
            />
        </Navigator>
    )
}