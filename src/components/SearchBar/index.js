import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Container, Input } from './styles'
import { theme } from '../../global/styles/theme'

export default () => {
    const [searchText, setSearchText] = useState('')

    return (
        <Container>
            <Ionicons
                color={theme.colors.text}
                name='search'
                size={20}
            />
            <Input
                onChangeText={setSearchText}
                placeholder='Pesquisar'
                placeholderTextColor={theme.colors.text}
                value={searchText}
            />
        </Container>
    )
}