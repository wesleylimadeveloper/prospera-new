import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

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
                {iconName === 'car-crash'
                    ?
                    <FontAwesome5
                        color={theme.colors.icon}
                        name={iconName}
                        size={80}
                    />
                    :
                    <Ionicons
                        color={theme.colors.icon}
                        name={iconName}
                        size={80}
                    />
                }

                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}