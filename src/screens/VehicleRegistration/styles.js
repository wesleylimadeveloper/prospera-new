import styled from 'styled-components'
import * as Animatable from 'react-native-animatable'

export const Scroll = styled.ScrollView`
    background-color: ${({ theme }) => theme.colors.background};
`

export const Container = styled.View`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: center;
    padding: 40px 0 15px 0;
`

export const Animate = styled(Animatable.View)`
    margin: -40px 0 -10px 0;
`