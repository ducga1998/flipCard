import React from 'react'
import { StyledButtonGroup, StyledInputGroup } from './styled'
import IGroupProps from './types'

const UIInputGroup = React.forwardRef<HTMLDivElement, IGroupProps>((props, ref) => {
    return <StyledInputGroup ref={ref} {...props}>
        {props.children}
    </StyledInputGroup>
})

const UIButtonGroup = React.forwardRef<HTMLDivElement, IGroupProps>((props, ref) => {
    return <StyledButtonGroup ref={ref} {...props} style={props.style}>
        {props.children}
    </StyledButtonGroup>
})

export default {
Button: UIButtonGroup,
    Input: UIInputGroup
}