import React from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function Dropdown({ title, onValueChange, selectedValue, children }) {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.picker}>
                <Picker
                    style={styles.pickerItem} 
                    dropdownIconColor={theme.colors.text}
                    mode='dropdown'
                    onValueChange={onValueChange}
                    selectedValue={selectedValue}
                >
                    {children}
                </Picker>
            </View>
        </>
    )
}