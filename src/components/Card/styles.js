import styled from 'styled-components/native'

export const Container = styled.View`
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 33%;
`

export const Touchable = styled.TouchableOpacity`
    align-items: center;
`

export const TitleWrapper = styled.View`
    width: 80%;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 14px;
    text-align: center;
`