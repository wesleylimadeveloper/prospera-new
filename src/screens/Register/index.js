import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Card from '../../components/Card'
import { Container, CardsWrapper } from './styles'

export default () => {
    const navigation = useNavigation()

    return (
        <Container>
            <CardsWrapper>
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
                    onPress={() => navigation.navigate("ToolRegistration")}
                    title='Peça'
                />

                <Card
                    iconName='ios-cart'
                    onPress={() => navigation.navigate("ProviderRegistration")}
                    title='Fornecedor'
                />
            </CardsWrapper>
        </Container>
    )
}