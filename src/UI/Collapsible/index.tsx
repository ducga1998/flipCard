// TODO: implement ... here
// Ref: https://polaris.shopify.com/components/behavior/collapsible
// Example: https://github.com/Shopify/polaris-react/tree/master/src/components/Collapsible

import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

interface ICollapsibleProps {
	open?: boolean;
	speed?: 'fast' | 'normal' | 'slow',
	fade?: boolean
}

interface ICollapsibleState {
	open: boolean;
	animating: boolean
}

/*
-- CONTROLLED COMPONENT EXAMPLE --

 - Test friendly
 - Minimal bugs
 - Faster performance

*/
const UICollapsibleSimple: FunctionComponent<ICollapsibleProps> = ({open, children, ...props}) => {
	return (
		<div {...props}>
			{open && children}
		</div>
	)
}

/*
-- UNCONTROLLED COMPONENT EXAMPLE --

 - Complex test script
 - Potential bugs
 - Reduced performance

*/
const resizeHandlers = new Set()

requestAnimationFrame(function tick() {
	// @ts-ignore
	resizeHandlers.forEach(handler => handler())
	requestAnimationFrame(tick)
})

const Outer = styled.div<{ animating: boolean }>`
	pointer-events: ${p => p.animating ? 'none' : 'initial'};
	overflow: hidden;
	transition-property: height;
	transition-timing-function: ease;
	box-sizing: border-box;
`
const Inner = styled.div`
	box-sizing: border-box;
	transition-property: opacity;
	transition-timing-function: ease;
	//padding: 1px 0;
	padding-top: 2px;
	margin: -1px 0;
`

export default class UICollapsible extends React.Component<ICollapsibleProps, ICollapsibleState> {
	static Simple = UICollapsibleSimple
	static defaultProps = {
		speed: 'normal',
		fade: false
	}
	outerRef: HTMLElement
	innerRef: HTMLElement
	timer: any
	currentHeight: number
	state = {
		open: this.props.open,
		animating: false
	}

	handleResize = () => {
		const {fade} = this.props
		if (this.state.open) {
			const newHeight = this.innerRef.offsetHeight
			if (newHeight !== this.currentHeight) {
				this.currentHeight = newHeight
				this.outerRef.style.transitionDuration = '0ms'
				fade && (this.innerRef.style.transitionDuration = '0ms')
				this.outerRef.style.height = newHeight + 'px'
			}
		}
	}

	componentDidMount() {
		const {fade} = this.props
		if (this.state.open) {
			this.currentHeight = this.innerRef.offsetHeight
			this.outerRef.style.height = this.currentHeight + 'px'
			fade && (this.innerRef.style.opacity = '1')
		} else {
			this.outerRef.style.height = '0px'
			fade && (this.innerRef.style.opacity = '0')
		}
		resizeHandlers.add(this.handleResize)
	}

	componentWillUnmount() {
		resizeHandlers.delete(this.handleResize)
	}

	async componentDidUpdate(prevProps, prevState) {
		const {fade} = this.props
		if (prevProps.open !== this.props.open || prevState.open !== this.state.open) {
			await this.setState({animating: true})
			const {speed} = this.props
			let height = 0
			let duration = 0
			const getDuration = () => {
				height = this.innerRef.offsetHeight
				duration = Math.max(Math.min(Math.round(height * 1.4), 400), 100)
				if (speed === 'fast') {
					duration = Math.round(duration / 2)
				} else if (speed === 'slow') {
					duration *= 2
				}
				this.outerRef.style.transitionDuration = duration + 'ms'
				fade && (this.innerRef.style.transitionDuration = duration + 'ms')
			}
			if (this.timer) {
				clearTimeout(this.timer)
			}
			if (!this.props.open) {
				getDuration()
				this.outerRef.style.height = '0px'
				fade && (this.innerRef.style.opacity = '0')
				this.timer = setTimeout(async () => {
					await this.setState({open: false, animating: false})
				}, duration)
			} else {
				await this.setState({open: true})
				getDuration()
				this.currentHeight = height
				this.outerRef.style.height = height + 'px'
				fade && (this.innerRef.style.opacity = '1')
				this.timer = setTimeout(async () => {
					await this.setState({animating: false})
				}, duration)
			}
		}
	}

	render() {
		const {children} = this.props
		const {open, animating} = this.state
		return (
			<Outer animating={animating} ref={el => (this.outerRef = el)}>
				<Inner ref={el => (this.innerRef = el)}>
					{open && children}
				</Inner>
			</Outer>
		)
	}
}
