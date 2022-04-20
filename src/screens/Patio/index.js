import React from 'react'

import PatioCard from '../../components/PatioCard'
import { Container, List } from './styles'

export default () => {
    const PatioCars = [
        {
            id: '1',
            brand: 'Polo',
            licensePlate: 'MIH-1174',
            SO: '22010101',
            getIn: '27/09',
            getOut: '30/09',
            hour: '10:00'
        },
        {
            id: '2',
            brand: 'Porsche',
            licensePlate: 'MIH-1175',
            SO: '22010101',
            getIn: '27/09',
            getOut: '30/09',
            hour: '12:00'
        },
        {
            id: '3',
            brand: 'Compass',
            licensePlate: 'MIH-1176',
            SO: '22010101',
            getIn: '27/09',
            getOut: '06/10',
            hour: '18:00'
        },
        {
            id: '4',
            brand: 'Blazer',
            licensePlate: 'MIH-1177',
            SO: '22010101',
            getIn: '19/09',
            getOut: '13/10',
            hour: '18:00'
        },
        {
            id: '5',
            brand: 'Audi A4',
            licensePlate: 'MIH-1178',
            SO: '22010101',
            getIn: '27/09',
            getOut: '18/10',
            hour: '18:00'
        }
    ]

    return (
        <Container>
            <List
                data={PatioCars}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <PatioCard patioCar={item} />}
            />
        </Container>
    )
}