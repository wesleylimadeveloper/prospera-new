import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#777777',
        borderRadius: 10,
        margin: 15,
        padding: 15,
        width: '80%'
    },
    title: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 22,
        marginBottom: 10,
        textAlign: 'center',
    },
    text: {
        color: theme.colors.text,
        fontFamily: theme.fonts.text,
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    }
})