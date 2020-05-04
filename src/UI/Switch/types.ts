export interface SwitchProps {
	disabled?: boolean
	value: boolean
	on: boolean
	onChange?: (value: boolean) => void
	className?: string
}