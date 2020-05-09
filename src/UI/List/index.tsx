import React from 'react'
import {StyledGridList, StyledList, StyledListItem, StyledListTitle} from './styled'
import {IListProps} from './types'

const Group = React.forwardRef<HTMLDivElement, IListProps>((props, ref) => {
    const {children, ...rest} = props
    return <StyledList ref={ref} {...rest}>
        {children}
    </StyledList>
})

const Grid = React.forwardRef<HTMLDivElement, IListProps>((props, ref) => {
    const {children, ...rest} = props
    return (
        <StyledGridList ref={ref} {...rest}>
            <div>
                {React.Children.map(children, child => {
                    return <div>{child}</div>
                })}
            </div>
        </StyledGridList>
    )
})

export default {
    Group,
    Item: StyledListItem,
    Title: StyledListTitle,
    Grid
}