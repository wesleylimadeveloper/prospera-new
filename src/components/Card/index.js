import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function Card({ iconName, title, ...rest }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchable}
                activeOpacity={0.7}
                {...rest}
            >
                <Ionicons
                    color={theme.colors.icon}
                    name={iconName}
                    size={100}
                />

                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}