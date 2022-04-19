import React from 'react'
import { ScrollView, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function ProviderRegistration() {
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Ionicons style={styles.icon}
                    color={theme.colors.icon}
                    name='ios-cart'
                    size={120}
                />

                <Input
                    placeholder='Nome/ Razão Social'
                />

                <Input
                    placeholder='Pessoa física/ jurídica'
                />

                <Input
                    placeholder='CPF/ CNPJ'
                />

                <Input
                    placeholder='Endereço'
                />

                <Button title='Cadastrar' />
            </View>
        </ScrollView>
    )
}