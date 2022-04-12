import React from 'react-native'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import Button from '../Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function VehicleCard({ vehicle }) {
    const navigation = useNavigation()

    const {
        licensePlate,
        brand,
        model,
        year,
        fuel,
        color,
        chassis
    } = vehicle

    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.iconCar}
                animation='zoomIn'
                name='car-sport-sharp'
                size={120}
                color={theme.colors.icon}
            />

            <Text style={styles.title}>{brand} {model} {year} {color}</Text>

            <Text style={styles.text}>{licensePlate}</Text>

            <Text style={styles.text}>{fuel}</Text>

            <Text style={styles.text}>{chassis}</Text>

            <Button
                title='Editar'
            />

            <Button
                title='Excluir'
            />

            <Button
                title='Serviços'
            />

            <Button
                title='Cadastrar serviço'
                onPress={() => navigation.navigate('ServiceRegistration')}
            />
        </View>
    )
}