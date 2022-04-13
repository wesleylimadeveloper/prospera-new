import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 15,
    },
    logo: {
        justifyContent: 'flex-start',
        marginBottom: -50,
        marginTop: -50,
        resizeMode: 'contain',
        width: '35%',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '95%',
    },
})