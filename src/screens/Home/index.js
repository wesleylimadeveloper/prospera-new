import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Simbol from '../../assets/simbol.png'
import Card from '../../components/Card'
import { styles } from './styles'

export default function Home() {
    const navigation = useNavigation()

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image style={styles.logo} source={Simbol} />

                <View style={styles.cardsContainer}>
                    <Card 
                        iconName='car-sport-sharp'
                        onPress={() => navigation.navigate("Vehicles")} 
                        title='Pátio' 
                    />

                    <Card
                        iconName='md-person-circle-sharp'
                        onPress={() => navigation.navigate("Clients")}
                        title='Clientes'
                    />

                    <Card
                        iconName='car-sport-sharp'
                        title='Serviços'
                    />

                    <Card
                        iconName='newspaper'
                        title='Relatórios'
                    />

                    <Card
                        iconName='md-calculator'
                        title='Orçamentos'
                    />

                    <Card
                        iconName='people'
                        title='Usuários'
                    />
                </View>
            </View>
        </ScrollView>
    )
}