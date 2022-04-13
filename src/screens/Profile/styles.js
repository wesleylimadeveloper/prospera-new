import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: theme.colors.text,
        fontFamily: theme.fonts.title,
        fontSize: 28,
    }
})