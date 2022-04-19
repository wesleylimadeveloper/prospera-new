import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors.icon,
        marginVertical: 5,
        padding: 4,
        width: '90%',
    },
    title: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
    },
    text: {
        color: theme.colors.text,
        fontFamily: theme.fonts.text,
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center'
    },
})