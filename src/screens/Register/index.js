import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../../components/Card'
import { styles } from './styles'

export default function Register() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.cardsContainer}>
                <Card
                    iconName='md-person-circle-sharp'
                    onPress={() => navigation.navigate("ClientRegistration")}
                    title='Cadastrar cliente'
                />

                <Card
                    iconName='car-sport-sharp'
                    onPress={() => navigation.navigate("VehicleRegistration")}
                    title='Cadastrar veículo'
                />

                <Card
                    iconName='car-sport-sharp'
                    onPress={() => navigation.navigate("ServiceRegistration")}
                    title='Cadastrar serviço'
                />

                <Card
                    iconName='people'
                    onPress={() => navigation.navigate("ProductiveRegistration")}
                    title='Cadastrar produtivo'
                />
            </View>
        </View>
    )
}