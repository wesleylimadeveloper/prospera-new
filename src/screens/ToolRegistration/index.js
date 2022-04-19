import React from 'react-native'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Input from '../../components/Input'
import Button from '../../components/Button'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export default function ToolRegistration() {
    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.icon}
                color={theme.colors.icon}
                name='build'
                size={100}
            />

            <Input placeholder='Peça' />

            <Button title='Cadastrar' />
        </View>
    )
}