import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Scroll, Container, Icon } from './styles'
import { theme } from '../../global/styles/theme';

export default () => {
    return (
        <Scroll>
            <Container>
                <Icon
                    color={theme.colors.icon}
                    name='people'
                    size={100}
                />

                <Input placeholder='Departamento' />

                <Input placeholder='Setores' />

                <Input placeholder='Etapa do processo' />

                <Input placeholder='Ações' />

                <Input placeholder='Valor/Hora x Ação' />

                <Input placeholder='Serviços' />

                <Button title='Cadastrar' />
            </Container>
        </Scroll>
    )
}