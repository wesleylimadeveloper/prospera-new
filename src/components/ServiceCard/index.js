import React from 'react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { styles } from './styles'

export default function ServiceCard({ service }) {
    const navigation = useNavigation()

    const { department, component, serviceType, vehicleSize } = service

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.9}>
                <Text style={styles.title}>{department}</Text>

                <Text style={styles.text}>{component}</Text>

                <Text style={styles.text}>{serviceType}</Text>

                <Text style={styles.text}>Veículo tamanho {vehicleSize}</Text>
            </TouchableOpacity>

            <View style={styles.buttonsContainer}>
                <ButtonCard title='Editar' />
                <ButtonCard title='Excluir' />
            </View>
        </View>
    )
}