import React from 'react'
import GridStyled from './styled'
import GridProps from './types'

const UIGrid = React.forwardRef<HTMLDivElement, GridProps>(({cols, children, ...props}, ref) => {
    let tmpl
    if (cols) {
        tmpl = cols.map(col => typeof col === 'string' ? col : `${col}fr`).join(' ')
    }
    return <GridStyled ref={ref} {...props} template={tmpl}>
        {children}
    </GridStyled>
})

export default UIGrid