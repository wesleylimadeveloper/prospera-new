import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons'

export const Scroll = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: 30px 0 10px 0;
`

export const Icon = styled(Ionicons)`
    margin-bottom: 20px;
`