import React, { useState } from 'react'
import { View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

import Dropdown from '../../components/Dropdown'
import DropdownItem from '../../components/DrodownItem'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function ServiceRegistration() {
    const [department, setDepartment] = useState('Estética')
    const [component, setComponent] = useState('')
    const [serviceType, setServiceType] = useState('Decapagem')
    const [vehicleSize, setVehicleSize] = useState('P')
    const [demandType, setDemandType] = useState('Quantidade de horas')

    return (
        <View style={styles.container}>
            <FontAwesome5
                style={styles.icon}
                color={theme.colors.icon}
                name='car-crash'
                size={90}
            />

            <Dropdown
                prompt='Departamento'
                onValueChange={setDepartment}
                selectedValue={department}
            >
                <DropdownItem label='Estética' value='Estética' />
                <DropdownItem label='Funilaría/ Pintura' value='Funilaría/ Pintura' />
                <DropdownItem label='Mecânica' value='Mecânica' />
            </Dropdown>

            <Input onChangeText={setComponent} placeholder='Componente' value={component} />

            <Dropdown
                prompt='Tipo de Serviço'
                onValueChange={setServiceType}
                selectedValue={serviceType}
            >
                <DropdownItem label='Decapagem' value='Decapagem' />
                <DropdownItem label='Martelinho' value='Martelinho' />
                <DropdownItem label='Pintura' value='Pintura' />
                <DropdownItem label='Recuperação' value='Recuperação' />
                <DropdownItem label='Tapeçaria' value='Tapeçaria' />
            </Dropdown>


            <Dropdown
                prompt='Tamanho do Veículo'
                onValueChange={setVehicleSize}
                selectedValue={vehicleSize}
            >
                <DropdownItem label='P' value='P' />
                <DropdownItem label='M' value='M' />
                <DropdownItem label='G' value='G' />
                <DropdownItem label='GG' value='GG' />
                <DropdownItem label='XG' value='XG' />
            </Dropdown>


            <Dropdown
                prompt='Tipo de Cobrança'
                onValueChange={setDemandType}
                selectedValue={demandType}
            >
                <DropdownItem label='Quantidade de horas' value='Quantidade de horas' />
                <DropdownItem label='Valor fixo' value='Valor fixo' />
            </Dropdown>

            <Input
                keyboardType='number-pad'
                placeholder={demandType === 'Quantidade de horas' ? '00:00' : 'R$ 0,00'}
            />

            <Button title='Cadastrar' />
        </View>
    )
}