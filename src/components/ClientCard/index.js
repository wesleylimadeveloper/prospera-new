import React from 'react-native'
import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { styles } from './styles'

export default function ClientCard({ client }) {
    const navigation = useNavigation()

    const { name, birthDate, email, phone, rg, cpf } = client

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.title}>{name}</Text>

                <Text style={styles.text}>CPF: {cpf}</Text>
            </TouchableOpacity>

            <View style={styles.buttonsWrapper}>
                <ButtonCard
                    onPress={() => navigation.navigate("Vehicles")} 
                    title='Veículos'
                />

                <ButtonCard 
                    onPress={() => navigation.navigate("VehicleRegistration")}
                    title='Cadastrar veículo'
                />

                <ButtonCard title='Editar' />

                <ButtonCard title='Excluir' />
            </View>
        </View>
    )
}