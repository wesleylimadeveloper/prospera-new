import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    align-self: center;
    margin: 10px 0;
    padding: 4px;
    width: 90%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 18px;
    margin-bottom: 5px;
    text-align: center;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 16px;
    margin-bottom: 5px;
    text-align: center;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
    width: 90%;
`