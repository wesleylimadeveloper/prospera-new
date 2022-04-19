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
                    iconName='construct'
                    onPress={() => navigation.navigate("ServiceRegistration")}
                    title='Serviço'
                />
                
                <Card
                    iconName='md-walk-outline'
                    onPress={() => navigation.navigate("ProductiveRegistration")}
                    title='Produtivo'
                />

                <Card
                    iconName='people'
                    onPress={() => navigation.navigate("DepartmentRegistration")}
                    title='Departamento'
                />

                <Card
                    iconName='build'
                    title='Peça'
                />

                <Card
                    iconName='ios-cart'
                    onPress={() => navigation.navigate("ProviderRegistration")}
                    title='Fornecedor'
                />
            </View>
        </View>
    )
}