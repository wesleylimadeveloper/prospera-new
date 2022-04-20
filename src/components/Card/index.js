import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { Container, Touchable, TitleWrapper, Title } from './styles'
import { theme } from '../../global/styles/theme'

export default ({ iconName, title, ...rest }) => {
    return (
        <Container>
            <Touchable
                activeOpacity={0.7}
                {...rest}>

                <Ionicons
                    color={theme.colors.icon}
                    name={iconName}
                    size={80}
                />

                <TitleWrapper>
                    <Title>{title}</Title>
                </TitleWrapper>

            </Touchable>
        </Container>
    )
}