import React from 'react'
import { ScrollView, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Simbol from '../../assets/simbol.png'
import Card from '../../components/Card'
import { styles } from './styles'

export default function Home() {
    const navigation = useNavigation()

    return (
        <ScrollView
            style={styles.scrollView} 
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                <Image style={styles.logo} source={Simbol} />

                <View style={styles.cardsContainer}>
                    <Card
                        iconName='md-person-circle-sharp'
                        onPress={() => navigation.navigate("Clients")}
                        title='Clientes'
                    />

                    <Card
                        iconName='md-calculator'
                        title='Orçamento'
                    />

                    <Card
                        iconName='document-text'
                        title='Ordem de serviço'
                    />

                    <Card
                        iconName='car-sport-sharp'
                        onPress={() => navigation.navigate("Vehicles")}
                        title='Pátio'
                    />

                    <Card
                        iconName='logo-buffer'
                        onPress={() => navigation.navigate("Register")}
                        title='Cadastros'
                    />
                </View>
            </View>
        </ScrollView>
    )
}