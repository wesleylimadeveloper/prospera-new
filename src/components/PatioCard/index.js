import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function PatioCard({ patioCar }) {
    const { brand, licensePlate, SO, getIn, getOut, hour } = patioCar

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.title}>{brand}</Text>
                <Text style={styles.text}>{licensePlate}</Text>
            </TouchableOpacity>

            <Text style={styles.text}>OS: {SO}</Text>
            
            <Text style={styles.text}>Entrada: {getIn}</Text>
            
            <Text style={styles.text}>Saída: {getOut}</Text>
            
            <Text style={styles.text}>Hora: {hour}</Text>
        </View>
    )
}