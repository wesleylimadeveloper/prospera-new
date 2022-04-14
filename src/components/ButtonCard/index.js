import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

export default function ButtonCard({ title, ...rest }) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}