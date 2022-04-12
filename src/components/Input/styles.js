import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#777777',
        borderRadius: 5,
        fontFamily: theme.fonts.text,
        justifyContent: 'center',
        marginBottom: 20,
        padding: 5,
        width: '70%',
    },
    input: {
        color: theme.colors.text,
        textAlign: 'center',
        width: '100%',
    }
})