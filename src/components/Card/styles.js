import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#777777',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
        paddingVertical: 30,
        width: '48%',
    },
    touchable: {
        alignItems: 'center',
    },
    text: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 18,
        textAlign: 'center',
    },
})