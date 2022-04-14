import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#777777',
        borderColor: '#FFF',
        borderRadius: 25,
        flexDirection: 'row',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '90%',
    },
    input: {
        color: theme.colors.text,
        flex: 1,
        fontFamily: theme.fonts.text,
        paddingHorizontal: 10,
    }
})