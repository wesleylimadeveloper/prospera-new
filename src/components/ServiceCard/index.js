import React from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ButtonCard from '../ButtonCard'
import { Container, Title, Text, ButtonsWrapper } from './styles'

export default ({ service }) => {
    const navigation = useNavigation()

    const { department, component, serviceType, vehicleSize } = service

    return (
        <Container>
            <TouchableOpacity activeOpacity={0.9}>
                <Title>{department}</Title>

                <Text>{component}</Text>

                <Text>{serviceType}</Text>

                <Text>Veículo tamanho {vehicleSize}</Text>
            </TouchableOpacity>

            <ButtonsWrapper>
                <ButtonCard title='Editar' />
                <ButtonCard title='Excluir' />
            </ButtonsWrapper>
        </Container>
    )
}