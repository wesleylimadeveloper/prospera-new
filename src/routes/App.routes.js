import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Clients from '../screens/Clients'
import ClientRegistration from '../screens/ClientRegistration'
import Vehicles from '../screens/Vehicles'
import VehicleRegistration from '../screens/VehicleRegistration'
import ServiceRegistration from '../screens/ServiceRegistration'
import ProductiveRegistration from '../screens/ProductiveRegistration'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.header,
                },
                headerTintColor: theme.colors.background,
                headerTitleStyle: {
                    fontFamily: theme.fonts.title,
                    fontSize: 22,
                },
            }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name="Clients"
                component={Clients}
                options={{
                    headerTitle: 'Clientes'
                }}
            />

            <Screen
                name="ClientRegistration"
                component={ClientRegistration}
                options={{
                    headerTitle: 'Cadastro de cliente'
                }}
            />

            <Screen
                name="Vehicles"
                component={Vehicles}
                options={{
                    headerTitle: 'Veículos'
                }}
            />

            <Screen
                name="VehicleRegistration"
                component={VehicleRegistration}
                options={{
                    headerTitle: 'Cadastro de veículo'
                }}
            />

            <Screen
                name="ServiceRegistration"
                component={ServiceRegistration}
                options={{
                    headerTitle: 'Cadastro de servíço'
                }}
            />

            <Screen
                name="ProductiveRegistration"
                component={ProductiveRegistration}
                options={{
                    headerTitle: 'Cadastro de produtivo'
                }}
            />
        </Navigator>
    )
}