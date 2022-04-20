import React from 'react'

import { Container, Input } from './styles'

export default ({ ...rest }) => {
    return (
        <Container>
            <Input
                placeholderTextColor='#E0DBCA'
                {...rest}
            />
        </Container>
    )
}