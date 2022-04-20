import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    background-color: #777777;
    border-radius: 25px;
    font-family: ${({ theme }) => theme.fonts.title};
    justify-content: center;
    margin-bottom: 20px;
    padding: 5px;
    width: 75%;
`

export const Input = styled.TextInput`
    color: ${({ theme }) => theme.colors.text};
    margin-left: 30px;
    width: 100%;
`