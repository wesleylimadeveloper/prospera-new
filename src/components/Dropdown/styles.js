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
        borderRadius: 25,
        height: 38,
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
        width: '75%',
    },
    pickerItem: {
        color: theme.colors.text,
    }
})