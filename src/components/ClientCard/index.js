import React from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { Container, Title, Text, ButtonsWrapper } from './styles'

export default ({ client }) => {
    const navigation = useNavigation()

    const { name, birthDate, email, phone, rg, cpf } = client

    return (
        <Container>
            <TouchableOpacity activeOpacity={0.8}>
                <Title>{name}</Title>
                <Text>CPF: {cpf}</Text>
            </TouchableOpacity>

            <ButtonsWrapper>
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
            </ButtonsWrapper>
        </Container>
    )
}