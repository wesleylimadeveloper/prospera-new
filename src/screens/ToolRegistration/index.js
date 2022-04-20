import React from 'react-native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { theme } from '../../global/styles/theme'
import { Container, Icon } from './styles'

export default () => {
    return (
        <Container>
            <Icon
                color={theme.colors.icon}
                name='build'
                size={100}
            />

            <Input placeholder='Peça' />

            <Button title='Cadastrar' />
        </Container>
    )
}