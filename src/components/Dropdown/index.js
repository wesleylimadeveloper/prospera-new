import React from 'react'
import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function Dropdown({ children, ...rest }) {
    return (
        <View style={styles.picker}>
            <Picker
                style={styles.pickerItem}
                dropdownIconColor={theme.colors.text}
                {...rest}
            >
                {children}
            </Picker>
        </View>
    )
}