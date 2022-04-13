import React from 'react'
import { TextInput, View } from 'react-native'

import { styles } from './styles'

export default function Input({ ...rest }) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor='#FFF'
                {...rest}
            />
        </View>
    )
}