import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: theme.colors.background,
    },
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 15,
        paddingTop: 40
    },
    iconWrapper: {
        marginBottom: -10,
        marginTop: -40,
    }
})