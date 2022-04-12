import React from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function Dropdown({ prompt, onValueChange, selectedValue, children }) {
    return (
        <>
            <View style={styles.picker}>
                <Picker
                    style={styles.pickerItem}
                    dropdownIconColor={theme.colors.text}
                    prompt={prompt}
                    mode='dialog'
                    onValueChange={onValueChange}
                    selectedValue={selectedValue}
                >
                    {children}
                </Picker>
            </View>
        </>
    )
}