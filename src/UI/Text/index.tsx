import React from 'react'
import {TextProps} from 'UI/Text/types'
import {Text, SmallText} from 'UI/Text/styled'

const UIText = React.forwardRef<HTMLDivElement, TextProps>(({size, children, ...props}, ref) => {
	switch (size) {
		case 'small':
			return <SmallText ref={ref} {...props}>{children}</SmallText>
		case 'medium':
		default:
			return <Text ref={ref} {...props}>{children}</Text>
	}
})

export default UIText