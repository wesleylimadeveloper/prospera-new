import React from 'react'
import { ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Input from '../../components/Input'
import Button from '../../components/Button'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export default function DepartmentRegistration() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Ionicons
                    style={styles.icon}
                    color={theme.colors.icon}
                    name='people'
                    size={100}
                />

                <Input placeholder='Departamento' />

                <Input placeholder='Setores' />

                <Input placeholder='Etapa do processo' />

                <Input placeholder='Ações' />

                <Input placeholder='Valor/Hora x Ação' />

                <Input placeholder='Serviços' />

                <Button title='Cadastrar' />
            </View>
        </ScrollView>
    )
}