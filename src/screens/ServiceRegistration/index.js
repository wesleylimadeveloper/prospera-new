import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import Dropdown from '../../components/Dropdown'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'

export default function ServiceRegistration() {
    const [department, setDepartment] = useState('Estética')
    const [component, setComponent] = useState('Parachoque dianteiro')
    const [serviceType, setServiceType] = useState('Decapagem')
    const [vehicleSize, setVehicleSize] = useState('P')
    const [demandType, setDemandType] = useState('Quantidade de horas')

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>

                <FontAwesome5 style={styles.icon} name='tools' size={90} />

                <Dropdown
                    title='Departamento'
                    onValueChange={setDepartment}
                    selectedValue={department}
                >
                    <Picker.Item label='Estética' value='Estética' />
                    <Picker.Item label='Funilaría/ Pintura' value='Funilaría/ Pintura' />
                    <Picker.Item label='Mecânica' value='Mecânica' />
                </Dropdown>

                <Dropdown
                    title='Componente'
                    onValueChange={setComponent}
                    selectedValue={component}
                >
                    <Picker.Item label='Parachoque dianteiro' value='Parachoque dianteiro' />
                    <Picker.Item label='Grade frontal' value='Grade frontal' />
                    <Picker.Item label='Farol de milha' value='Farol de milha' />
                </Dropdown>

                <Dropdown
                    title='Tipo de Serviço'
                    onValueChange={setServiceType}
                    selectedValue={serviceType}
                >
                    <Picker.Item label='Decapagem' value='Decapagem' />
                    <Picker.Item label='Martelinho' value='Martelinho' />
                    <Picker.Item label='Pintura' value='Pintura' />
                    <Picker.Item label='Recuperação' value='Recuperação' />
                    <Picker.Item label='Tapeçaria' value='Tapeçaria' />
                </Dropdown>


                <Dropdown
                    title='Tamanho do Veículo'
                    onValueChange={setVehicleSize}
                    selectedValue={vehicleSize}
                >
                    <Picker.Item label='P' value='P' />
                    <Picker.Item label='M' value='M' />
                    <Picker.Item label='G' value='G' />
                    <Picker.Item label='GG' value='GG' />
                    <Picker.Item label='XG' value='XG' />
                </Dropdown>


                <Dropdown
                    title='Tipo de Cobrança'
                    onValueChange={setDemandType}
                    selectedValue={demandType}
                >
                    <Picker.Item label='Quantidade de horas' value='Quantidade de horas' />
                    <Picker.Item label='Valor fixo' value='Valor fixo' />
                </Dropdown>

                <Input
                    keyboardType="number-pad"
                    placeholder={demandType === 'Quantidade de horas' ? '00:00' : 'R$ 0,00'}
                />

                <Button title="Cadastrar" />

            </View>
        </ScrollView>
    )
}