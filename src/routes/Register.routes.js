import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Register from '../screens/Register'
import ServiceRegistration from '../screens/ServiceRegistration'
import ProductiveRegistration from '../screens/ProductiveRegistration'
import DepartmentRegistration from '../screens/DepartmentRegistration'
import ProviderRegistration from '../screens/ProviderRegistration'
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
                name='Register'
                component={Register}
                options={{
                    headerShown: false
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
            
            <Screen
                name='DepartmentRegistration'
                component={DepartmentRegistration}
                options={{
                    title: 'Cadastro de departamento'
                }}
            />

            <Screen
                name='ProviderRegistration'
                component={ProviderRegistration}
                options={{
                    title: 'Cadastro de fornecedor'
                }}
            />
        </Navigator>
    )
}