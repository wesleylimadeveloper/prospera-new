import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        paddingBottom: 10,
    },
    icon: {
        marginBottom: 15,
    }
})