import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function SearchBar() {
    const [searchText, setSearchText] = useState('')

    return (
        <View style={styles.container}>
            <Ionicons
                color={theme.colors.text}
                name='search'
                size={20}
            />
            <TextInput
                style={styles.input}
                onChangeText={setSearchText}
                placeholder='Pesquisar'
                placeholderTextColor={theme.colors.text}
                value={searchText}
            />
        </View>
    )
}