import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Simbol from '../../assets/simbol.png'
import Card from '../../components/Card'
import { Scroll, Container, CardsWrapper, styles } from './styles'

export default () => {
    const navigation = useNavigation()

    return (
        <Scroll
            showsVerticalScrollIndicator={false}>
            <Container>
                <Image style={styles.logo} source={Simbol} />

                <CardsWrapper>
                    <Card
                        iconName='md-person-circle-sharp'
                        onPress={() => navigation.navigate("ClientsVehicles")}
                        title='Clientes e Veículos'
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
                        iconName='car-sport-outline'
                        onPress={() => navigation.navigate("Patio")}
                        title='Pátio'
                    />

                    <Card
                        iconName='logo-buffer'
                        onPress={() => navigation.navigate("RegisterRoutes")}
                        title='Cadastros'
                    />
                </CardsWrapper>
            </Container>
        </Scroll>
    )
}