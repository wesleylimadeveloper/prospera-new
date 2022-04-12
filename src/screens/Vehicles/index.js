import React from 'react'
import { FlatList, View } from 'react-native'

import VehicleCard from '../../components/VehicleCard'
import { styles } from './styles'

export default function Vehicles() {
    const vehicles = [
        {
            id: '1',
            licensePlate: 'ENA-3274',
            brand: 'AUDI',
            model: 'Q3',
            year: '2022',
            yearModel: 'Q3 2022',
            fuel: 'Gasolina',
            color: 'Preto',
            chassis: '9BG116GW04C400001'
        },
        {
            id: '2',
            licensePlate: 'ENA-3274',
            brand: 'AUDI',
            model: 'Q3',
            year: '2022',
            yearModel: 'Q3 2022',
            fuel: 'Gasolina',
            color: 'Preto',
            chassis: '9BG116GW04C400001'
        },
        {
            id: '3',
            licensePlate: 'ENA-3274',
            brand: 'AUDI',
            model: 'Q3',
            year: '2022',
            yearModel: 'Q3 2022',
            fuel: 'Gasolina',
            color: 'Preto',
            chassis: '9BG116GW04C400001'
        },
        {
            id: '4',
            licensePlate: 'ENA-3274',
            brand: 'AUDI',
            model: 'Q3',
            year: '2022',
            yearModel: 'Q3 2022',
            fuel: 'Gasolina',
            color: 'Preto',
            chassis: '9BG116GW04C400001'
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={vehicles}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <VehicleCard vehicle={item} />}
            />
        </View>
    )
}