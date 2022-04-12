import React from 'react'
import { FlatList, View } from 'react-native'

import ClientCard from '../../components/ClientCard'
import { styles } from './styles'

export default function Clients() {
    const clients = [
        {
            id: '1',
            name: 'Wesley Lima',
            phone: '91205-5094',
            cpf: '396.164.548-10',
            rg: '46.656.340-1',
            birthDate: '04/05/1990',
            email: 'wesleyguedes7@gmail.com'
        },
        {
            id: '2',
            name: 'Thalita Isabel',
            phone: '96666-2377',
            cpf: '396.164.548-10',
            rg: '46.656.340-1',
            birthDate: '01/03/1990',
            email: 'tisabel.ici@gmail.com'
        },
        {
            id: '3',
            name: 'Wesley Lima',
            phone: '91205-5094',
            cpf: '396.164.548-10',
            rg: '46.656.340-1',
            birthDate: '04/05/1990',
            email: 'wesleyguedes7@gmail.com'
        },
        {
            id: '4',
            name: 'Thalita Isabel',
            phone: '96666-2377',
            cpf: '396.164.548-10',
            rg: '46.656.340-1',
            birthDate: '01/03/1990',
            email: 'tisabel.ici@gmail.com'
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={clients}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ClientCard client={item} />}
            />
        </View>
    )
}