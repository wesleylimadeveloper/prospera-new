import React, { useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Scroll, Container, Icon } from './styles'
import { theme } from '../../global/styles/theme'

export default () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [admissionDate, setAdmissionDate] = useState('')

    return (
        <Scroll>
            <Container>
                <Icon
                    color={theme.colors.icon}
                    name='md-walk-outline'
                    size={100}
                />

                <Input
                    onChangeText={setName}
                    placeholder='Nome'
                    value={name}
                />

                <Input
                    onChangeText={setPosition}
                    placeholder='Cargo'
                    value={position}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setCpf}
                    placeholder='CPF'
                    value={cpf}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setRg}
                    placeholder='RG'
                    value={rg}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setAdmissionDate}
                    placeholder='Data de admissão'
                    value={admissionDate}
                />

                <Input
                    keyboardType='number-pad'
                    placeholder='Horário'
                />

                <Button title='Cadastrar' />
            </Container>
        </Scroll>
    )
}