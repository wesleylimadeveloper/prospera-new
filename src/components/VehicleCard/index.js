import React from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { Container, Title, Text, ButtonsWrapper } from './styles'

export default ({ vehicle }) => {
    const navigation = useNavigation()

    const { licensePlate, brand, model, year, fuel, color, chassis } = vehicle

    return (
        <Container>
            <TouchableOpacity activeOpacity={0.9}>
                <Title>{brand} {model}</Title>

                <Text>Placa {licensePlate}</Text>
            </TouchableOpacity>

            <ButtonsWrapper>
                <ButtonCard title='Editar' />
                <ButtonCard title='Excluir' />
            </ButtonsWrapper>
        </Container>
    )
}