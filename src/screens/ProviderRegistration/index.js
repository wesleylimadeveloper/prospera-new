import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Scroll, Container, Icon } from './styles'
import { theme } from '../../global/styles/theme'

export default () => {
    const navigation = useNavigation()

    return (
        <Scroll>
            <Container>
                <Icon
                    color={theme.colors.icon}
                    name='ios-cart'
                    size={120}
                />

                <Input
                    placeholder='Nome/ Razão Social'
                />

                <Input
                    placeholder='Pessoa física/ jurídica'
                />

                <Input
                    placeholder='CPF/ CNPJ'
                />

                <Input
                    placeholder='Endereço'
                />

                <Button title='Cadastrar' />
            </Container>
        </Scroll>
    )
}