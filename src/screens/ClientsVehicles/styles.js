import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: center;
`

export const IconsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 55%;
`