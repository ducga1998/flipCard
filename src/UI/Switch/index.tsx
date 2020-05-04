import React from 'react'
import { SwitchProps } from './types'
import { Switch } from './styled'

const UISwitch = React.forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
	const { className, value, onChange, on, disabled, ...rest } = props
	const toggle = () => {
		!disabled && onChange && onChange(!value)
	}
	return (
		<Switch className={className} ref={ref} {...rest} onClick={toggle}>
			<input type={'checkbox'} defaultChecked={value === on} disabled={disabled}/>
			<span></span>
		</Switch>
	)
})


UISwitch.defaultProps = {
	on: true
}
export default UISwitch



