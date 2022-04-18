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
        paddingBottom: 5,
    },
    icon: {
        marginTop: 30,
    }
})