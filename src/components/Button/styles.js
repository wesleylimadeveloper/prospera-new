import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F8D73A',
        borderRadius: 25,
        justifyContent: 'center',
        marginBottom: 10,
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