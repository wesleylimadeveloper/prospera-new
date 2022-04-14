import React from 'react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { styles } from './styles'

export default function VehicleCard({ vehicle }) {
    const navigation = useNavigation()

    const { licensePlate, brand, model, year, fuel, color, chassis } = vehicle

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.9}>
                <Text style={styles.title}>{brand} {model}</Text>

                <Text style={styles.text}>Placa {licensePlate}</Text>
            </TouchableOpacity>

            <View style={styles.buttonsContainer}>
                <ButtonCard title='Editar' />
                <ButtonCard title='Excluir' />
            </View>
        </View>
    )
}