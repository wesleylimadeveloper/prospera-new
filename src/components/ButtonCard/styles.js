import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.button,
        borderRadius: 3,
        justifyContent: 'center',
        marginBottom: 10,
        paddingVertical: 8,
        width: '48%',
    },
    text: {
        color: theme.colors.background,
        fontFamily: theme.fonts.title,
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
})