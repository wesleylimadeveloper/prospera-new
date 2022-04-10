import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Roboto_500Medium } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

import AppRoutes from './src/routes/App.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
   <NavigationContainer>
     <StatusBar barStyle='light-content' />
     <AppRoutes />
   </NavigationContainer>
  )
}