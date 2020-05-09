import React from 'react'
import {UICheckboxProps} from './types'
import {Checkbox} from './styled'

const UICheckbox = React.forwardRef<HTMLInputElement, UICheckboxProps>((props, ref) => {
	const {children, value, onChange, defaultValue, className, disabled, mixed, ...rest} = props
	const toggle = e => !disabled && onChange && onChange(e.target.checked)
	return (
		<Checkbox className={className} hasText={children} mixed={mixed}>
			<input
				ref={ref}
				{...rest}
				type={'checkbox'}
				checked={value}
				defaultChecked={defaultValue}
				disabled={disabled}
				onChange={toggle}
			/>
			{children}
		</Checkbox>
	)
})

export default UICheckbox
