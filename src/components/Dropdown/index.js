import React from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { styles } from './styles'

export default function Dropdown({ title, onValueChange, selectedValue, children }) {
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.picker}>
                <Picker
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