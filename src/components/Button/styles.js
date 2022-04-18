import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.button,
        borderRadius: 25,
        justifyContent: 'center',
        marginBottom: 15,
        padding: 10,
        width: '75%',
    },
    text: {
        color: theme.colors.background,
        fontFamily: theme.fonts.title,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})