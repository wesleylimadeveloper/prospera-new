import styled from 'styled-components'

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: center;
    padding: 15px 0;
`

export const CardsWrapper = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 95%;
`