import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    align-self: center;
    background-color: #777777;
    border-color: #FFF;
    border-radius: 25px;
    flex-direction: row;
    padding: 5px 10px;
    width: 90%;
`

export const Input = styled.TextInput`
    color: ${({ theme }) => theme.colors.text};
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.text};
    padding: 0 10px;
`