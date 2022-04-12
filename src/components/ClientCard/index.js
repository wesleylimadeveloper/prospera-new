import React from 'react-native'
import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../Button'
import { styles } from './styles'

export default function ClientCard({ client }) {
    const navigation = useNavigation()

    const {
        name,
        birthDate,
        email,
        phone,
        rg,
        cpf
    } = client

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>

            <Text style={styles.text}>{birthDate}</Text>

            <Text style={styles.text}>{email}</Text>

            <Text style={styles.text}>Telefone: {phone}</Text>

            <Text style={styles.text}>RG: {rg}</Text>

            <Text style={styles.text}>CPF: {cpf}</Text>

            <Button
                title='Veículos'
                onPress={() => navigation.navigate('Vehicles')}
            />

            <Button
                title='Cadastrar veículo'
                onPress={() => navigation.navigate('VehicleRegistration')}
            />
        </View>
    )
}