import React from 'react'
import { FlatList, View } from 'react-native'

import ServiceCard from '../../components/ServiceCard'
import SearchBar from '../../components/SearchBar'
import { styles } from './styles'

export default function Services() {
    const vehicles = [
        {
            id: '1',
            department: 'Estética',
            component: 'Porta frontal direita (Pintura)',
            serviceType: 'Pintura',
            vehicleSize: 'M'
        },
        {
            id: '2',
            department: 'Estética',
            component: 'Porta frontal direita (Pintura)',
            serviceType: 'Pintura',
            vehicleSize: 'M'
        },
        {
            id: '3',
            department: 'Estética',
            component: 'Porta frontal direita (Pintura)',
            serviceType: 'Pintura',
            vehicleSize: 'M'
        },
    ]

    return (
        <View style={styles.container}>
            <SearchBar />

            <FlatList
                data={vehicles}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ServiceCard service={item} />}
            />
        </View>
    )
}