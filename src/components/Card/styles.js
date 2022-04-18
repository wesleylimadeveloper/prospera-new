import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        width: '33%',
    },
    touchable: {
        alignItems: 'center',
    },
    titleWrapper: {
        width: '60%',
    },
    title: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 16,
        textAlign: 'center',
    },
})