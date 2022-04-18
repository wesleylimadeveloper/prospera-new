import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';  

import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export default function DepartmentRegistration() {
    return (
        <View style={styles.container}>
            <Ionicons 
                color={theme.colors.icon}
                name='people'
                size={100}
            />

            <Input placeholder='Departamento' />

            <Button title='Cadastrar' />
        </View>
    )
}