import React from 'react'
import {IButtonProps} from './types'
import UIButton from './'

export interface Props extends IButtonProps {
	disabled?: boolean
	value?: boolean
	on?: any
	off?: any
	onChange?: (value: boolean) => void
	className?: string
}


const UIButtonToggle = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const {value, onChange, on, off, children, ...rest} = props
	const toggle = () => onChange && onChange(value === on ? off : on)
	return (
		<UIButton ref={ref} {...rest} active={value === on} onClick={toggle}>
			{children}
		</UIButton>
	)
})

UIButtonToggle.defaultProps = {
	on: true,
	off: false
}

export default UIButtonToggle
