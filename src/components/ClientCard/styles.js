import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    align-self: center;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.icon};
    margin: 10px 0 10px 0;
    padding: 4px;
    width: 90%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
`

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5px;
    width: 90%;
`