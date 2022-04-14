import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F8D73A',
        borderRadius: 3,
        justifyContent: 'center',
        padding: 8,
        width: '48%',
    },
    text: {
        color: theme.colors.background,
        fontFamily: theme.fonts.title,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})