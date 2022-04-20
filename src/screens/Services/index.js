import React from 'react'

import ServiceCard from '../../components/ServiceCard'
import SearchBar from '../../components/SearchBar'
import { Container, List } from './styles'

export default () => {
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
        <Container style={styles.container}>
            <SearchBar />

            <List
                data={vehicles}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ServiceCard service={item} />}
            />
        </Container>
    )
}