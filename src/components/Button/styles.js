import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F8D73A',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
        padding: 10,
        width: '70%',
    },
    text: {
        color: theme.colors.background,
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})