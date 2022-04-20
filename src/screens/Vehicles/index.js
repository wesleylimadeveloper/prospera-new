import React from 'react'

import VehicleCard from '../../components/VehicleCard'
import SearchBar from '../../components/SearchBar'
import { Container, List } from './styles'

export default () => {
    const vehicles = [
        {
            id: '1',
            licensePlate: 'AOL-8324',
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
            licensePlate: 'WIL-8227',
            brand: 'BMW',
            model: 'X6',
            year: '2022',
            yearModel: 'X6 2020',
            fuel: 'Gasolina',
            color: 'Branco',
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
    ]

    return (
        <Container>
            <SearchBar />

            <List
                data={vehicles}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <VehicleCard vehicle={item} />}
            />
        </Container>
    )
}