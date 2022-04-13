import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function VehicleRegistration() {
    const [licensePlate, setLicensePlate] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [yearModel, setYearModel] = useState('')
    const [fuel, setFuel] = useState('')
    const [color, setColor] = useState('')
    const [chassis, setChassis] = useState('')

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Animatable.View
                    animation='bounceInLeft'
                    delay={100}
                    duration={1000}
                    style={styles.iconWrapper}>
                    <Ionicons
                        animation='zoomIn'
                        name='car-sport-sharp'
                        size={120}
                        color={theme.colors.icon}
                    />
                </Animatable.View>

                <Input
                    keyboardType='number-pad'
                    onChangeText={setLicensePlate}
                    placeholder='Placa'
                    value={licensePlate}
                />

                <Input
                    onChangeText={setBrand}
                    placeholder='Marca'
                    value={brand}
                />

                <Input
                    onChangeText={setModel}
                    placeholder='Modelo'
                    value={model}
                />

                <Input
                    keyboardType='number-pad'
                    onChangeText={setYear}
                    placeholder='Ano'
                    value={year}
                />

                <Input
                    onChangeText={setYearModel}
                    placeholder='Ano/ Modelo'
                    value={yearModel}
                />

                <Input
                    onChangeText={setFuel}
                    placeholder='Combustível'
                    value={fuel}
                />

                <Input
                    onChangeText={setColor}
                    placeholder='Cor'
                    value={color}
                />

                <Input
                    onChangeText={setChassis}
                    placeholder='Chassi'
                    value={chassis}
                />

                <Button title='Cadastrar' />
            </View>
        </ScrollView>
    )
}