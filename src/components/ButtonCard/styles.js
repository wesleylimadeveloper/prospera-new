import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 3px;
    justify-content: center;
    margin-bottom: 10px;
    padding: 8px 0 8px 0;
    width: 48%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`