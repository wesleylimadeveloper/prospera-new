import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/Button'
import { Container, IconsWrapper } from './styles'
import { theme } from '../../global/styles/theme';

export default () => {
    const navigation = useNavigation()

    return (
        <Container>
            <IconsWrapper>
                <Ionicons
                    color={theme.colors.icon}
                    name='md-person-circle-sharp'
                    size={100}
                />
                <Ionicons
                    color={theme.colors.icon}
                    name='car-sport-sharp'
                    size={100}
                />
            </IconsWrapper>

            <Button
                onPress={() => navigation.navigate("Clients")}
                title='Consultar cliente'
            />

            <Button
                onPress={() => navigation.navigate("ClientRegistration")}
                title='Cadastrar cliente'
            />

            <Button
                onPress={() => navigation.navigate("Vehicles")}
                title='Consultar veículo'
            />
        </Container>
    )
}