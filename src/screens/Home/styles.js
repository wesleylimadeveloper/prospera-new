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
    },
    logo: {
        justifyContent: 'flex-start',
        marginBottom: -50,
        marginTop: -50,
        resizeMode: 'contain',
        width: '35%',
    },
    cardsContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '95%',
    },
})