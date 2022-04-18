import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        width: '33%',
    },
    touchable: {
        alignItems: 'center',
    },
    titleWrapper: {
        width: '80%',
    },
    title: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 14,
        textAlign: 'center',
    },
})