import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Register from '../screens/Register'
import VehicleRegistration from '../screens/VehicleRegistration'
import ClientRegistration from '../screens/ClientRegistration'
import ServiceRegistration from '../screens/ServiceRegistration'
import ProductiveRegistration from '../screens/ProductiveRegistration'
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
                    fontSize: 22,
                },
            }}
        >
            <Screen
                name='Register'
                component={Register}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='VehicleRegistration'
                component={VehicleRegistration}
                options={{
                    title: 'Cadastro de veículo'
                }}
            />

            <Screen
                name='ClientRegistration'
                component={ClientRegistration}
                options={{
                    title: 'Cadastro de cliente'
                }}
            />

            <Screen
                name='ServiceRegistration'
                component={ServiceRegistration}
                options={{
                    title: 'Cadastro de serviço'
                }}
            />

            <Screen
                name='ProductiveRegistration'
                component={ProductiveRegistration}
                options={{
                    title: 'Cadastro de produtivo'
                }}
            />
        </Navigator>
    )
}