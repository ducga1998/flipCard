import React from 'react'
import SortableJs from "./SortableJs";

interface SortProps {
	items: any
	wrapper: any
	wrapperProps?: {}
	render: (items) => void
	renderComponent?: any
	options?: {}
	dragHandlerSelector?: string
	onChange?: (newItems, newIndex?: number, oldIndex?: number) => void
}

const SortableList = (props: SortProps) => {
	const {items, options, onChange, dragHandlerSelector, ...rest} = props
	const defaultOptions = {
		animation: 200,
		// sort: true,
		// delay: 100,
		// forceFallback: true, //ignore the HTML5 DnD behaviour and force the fallback to kick in
		// delayOnTouchOnly: true,
		handle: dragHandlerSelector || '',
		fallbackClass: 'fallback',
		chosenClass: 'chosen',
		ghostClass: 'placeholder',
		...options
	}

	const handleChange = (evt) => {
		if (onChange) {
			const {newIndex, oldIndex} = evt
			const newItems = [...items]
			newItems.splice(newIndex, 0, ...newItems.splice(oldIndex, 1))
			onChange(newItems, newIndex, oldIndex)
		}
	}

	return (
		<SortableJs

			options={defaultOptions}
			onChange={onChange && handleChange}
			{...rest}
		>
			{props.renderComponent || props.render(items)}
		</SortableJs>
	)
}

export default SortableList

