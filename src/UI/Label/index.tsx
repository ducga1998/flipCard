import React from 'react'
import { StyledLabel } from './styled'
import { LabelProps } from "../Label/types";

const UILabel =  React.forwardRef<HTMLParagraphElement, LabelProps>(({ required, children, ...props }, ref) => {
	return <StyledLabel ref={ref} {...props} >{children}{required && <span>*</span>}</StyledLabel>
})

export default UILabel