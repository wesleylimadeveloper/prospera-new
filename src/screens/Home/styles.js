import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

export const Scroll = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`

export const CardsWrapper = styled.View`
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 95%;
`
 
export const styles = StyleSheet.create({
    logo: {
        justifyContent: 'flex-start',
        marginBottom: -50,
        marginTop: -50,
        resizeMode: 'contain',
        width: '35%',
    },
})