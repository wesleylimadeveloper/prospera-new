import React from 'react'
import { FlatList, View } from 'react-native'

import SearchBar from '../../components/SearchBar'
import ButtonCard from '../../components/ButtonCard'
import ClientCard from '../../components/ClientCard'
import { styles } from './styles'

export default function Clients() {
    const clients = [
        {
            id: '1',
            name: 'Wesley Lima',
            phone: '91205-5094',
            cpf: '313.867.514-05',
            rg: '46.656.340-1',
            birthDate: '04/05/1990',
            email: 'wesleyguedes7@gmail.com'
        },
        {
            id: '2',
            name: 'Gustavo Silva',
            phone: '96666-2377',
            cpf: '613.353.231-98',
            rg: '27.360.106-4',
            birthDate: '02/03/1994',
            email: 'gustavo@gmail.com'
        },
        {
            id: '3',
            name: 'Ana Carolina dos Santos Azevedo',
            phone: '91441-5694',
            cpf: '543.201.668-09',
            rg: '36.814.982-1',
            birthDate: '26/08/1995',
            email: 'anacarolinaazevedo@gmail.com'
        },
    ]

    return (
        <View style={styles.container}>
            <SearchBar />
           
            <FlatList
                data={clients}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ClientCard client={item} />}
            />
        </View>
    )
}