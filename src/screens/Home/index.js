import React from 'react'
import { Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { styles } from './styles'

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={Logo}
            />

            <Button
                title="Cadastrar cliente"
                onPress={() => navigation.navigate('ClientRegistration')}
            />

            <Button
                title="Cadastrar veículo"
                onPress={() => navigation.navigate('VehicleRegistration')}
            />

            <Button
                title="Cadastrar serviço"
                onPress={() => navigation.navigate('ServiceRegistration')}
            />

            <Button
                title="Cadastrar produtivo"
                onPress={() => navigation.navigate('ProductiveRegistration')}
            />
        </View>
    )
}