import React from 'react'
import { Container, Title } from './styles'

export default ({ title, ...rest }) => {
    return (
        <Container
            activeOpacity={0.8}
            {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}