import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { Scroll, Container, Icon } from './styles'
import { theme } from '../../global/styles/theme'

export default () => {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const [cep, setCep] = useState('')
    const [publicArea, setPublicArea] = useState('')
    const [number, setNumber] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [birth, setBirth] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Scroll>
            <Container>
                <Icon
                    color={theme.colors.icon}
                    name='person-circle'
                    size={120}
                />

                <Input
                    onChangeText={setName}
                    placeholder='Nome'
                    value={name}
                />

                <Input
                    keyboardType='phone-pad'
                    onChangeText={setPhone}
                    placeholder='Telefone'
                    value={phone}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setCpf}
                    placeholder='CPF ou CNPJ'
                    value={cpf}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setRg}
                    placeholder='RG'
                    value={rg}
                />

                <Input
                    keyboardType='phone-pad'
                    onChangeText={setBirth}
                    placeholder='Data de Nascimento'
                    value={birth}
                />

                <Input
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    placeholder='E-mail'
                    value={email}
                />

                <Button
                    onPress={() => navigation.navigate("VehicleRegistration")}
                    title='Incluir veículo'
                />

                <Button title='Cadastrar' />
            </Container>
        </Scroll>
    )
}