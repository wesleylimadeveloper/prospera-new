import styled from 'styled-components'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Scroll = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding-bottom: 5px;
`

export const Icon = styled(Ionicons)`
    margin-top: 30px;
`