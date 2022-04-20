import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Title, Text } from './styles'

export default ({ patioCar }) => {
    const { brand, licensePlate, SO, getIn, getOut, hour } = patioCar

    return (
        <Container>
            <TouchableOpacity activeOpacity={0.8}>
                <Title>{brand}</Title>
                <Text>{licensePlate}</Text>
            </TouchableOpacity>

            <Text>OS: {SO}</Text>

            <Text>Entrada: {getIn}</Text>

            <Text>Saída: {getOut}</Text>

            <Text>Hora: {hour}</Text>
        </Container>
    )
}