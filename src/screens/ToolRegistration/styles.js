import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: center;
`

export const Icon = styled(Ionicons)`
    margin-bottom: 10px;
`