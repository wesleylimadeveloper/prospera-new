import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    title: {
        color: '#ececec',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        marginBottom: 5,
    },
    picker: {
        backgroundColor: '#777777',
        borderRadius: 5,
        marginBottom: 15,
        width: '70%',
    },
    pickerItem: {
        color: theme.colors.text,
    }
})