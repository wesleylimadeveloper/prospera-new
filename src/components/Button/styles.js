import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.button};
    border-radius: 25px;
    justify-content: center;
    margin-bottom: 15px;
    padding: 10px;
    width: 75%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`