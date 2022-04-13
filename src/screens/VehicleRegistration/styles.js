import { Roboto_100Thin } from '@expo-google-fonts/roboto'
import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    scrollView: {
        flex: Roboto_100Thin,
    },
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        paddingBottom: 15,
        paddingTop: 40
    },
    iconWrapper: {
        marginBottom: -10,
        marginTop: -40,
    }
})