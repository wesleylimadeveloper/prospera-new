import React from 'react-native'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export default function ClientCard({ client }) {
    const navigation = useNavigation()

    const { name, birthDate, email, phone, rg, cpf } = client

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>

            <Text style={styles.text}>CPF: {cpf}</Text>
        </View>
    )
}