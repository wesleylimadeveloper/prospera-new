import React from 'react-native'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export default function VehicleCard({ vehicle }) {
    const navigation = useNavigation()

    const { licensePlate, brand, model, year, fuel, color, chassis } = vehicle

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{brand} {model}</Text>

            <Text style={styles.text}>Placa {licensePlate}</Text>
        </View>
    )
}