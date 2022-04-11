import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export default function ClientRegistration() {
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                <Ionicons style={styles.icon} name='person-circle' size={120} color={theme.colors.icon} />

                <Input
                    onChangeText={setName}
                    placeholder="Nome"
                    value={name}
                />

                <Input
                    keyboardType="phone-pad"
                    onChangeText={setPhone}
                    placeholder="Telefone"
                    value={phone}
                />

                <Input
                    keyboardType="number-pad"
                    onChangeText={setCpf}
                    placeholder="CPF"
                    value={cpf}
                />

                <Input
                    keyboardType="number-pad"
                    onChangeText={setRg}
                    placeholder="RG"
                    value={rg}
                />

                <Input
                    keyboardType="number-pad"
                    onChangeText={setCep}
                    placeholder="CEP"
                    value={cep}
                />

                <Input
                    onChangeText={setPublicArea}
                    placeholder="Logradouro"
                    value={publicArea}
                />

                <Input
                    keyboardType="number-pad"
                    onChangeText={setNumber}
                    placeholder="Número"
                    value={number}
                />

                <Input
                    onChangeText={setDistrict}
                    placeholder="Bairro"
                    value={district}
                />

                <Input
                    onChangeText={setCity}
                    placeholder="Cidade"
                    value={city}
                />

                <Input
                    onChangeText={setState}
                    placeholder="Estado"
                    value={state}
                />

                <Input
                    keyboardType="phone-pad"
                    onChangeText={setBirth}
                    placeholder="Data de Nascimento"
                    value={birth}
                />

                <Input
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholder="E-mail"
                    value={email}
                />

                <Button title="Cadastrar" />

            </View>
        </ScrollView>
    )
}