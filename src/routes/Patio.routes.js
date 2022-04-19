import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Patio from '../screens/Patio'
import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createNativeStackNavigator()

export default function PatioRoutes() {
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
                name='Patio'
                component={Patio}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}