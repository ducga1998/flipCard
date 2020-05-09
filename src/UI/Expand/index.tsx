import React, {Component, ReactNode} from 'react'
import styled from 'styled-components'
import UIButton from 'UI/Button'
import UIIcon from 'UI/Icon'

interface UIExpandProps {
	header: ReactNode,
	hasToggleIcon?: boolean,
	renderToggleIcon?: (isExpanded: boolean) => any,
	defaultExpand: boolean,
	children?: ReactNode
}

interface UIExpandState {
	isExpanded: any
}

export default class UIExpand extends Component<UIExpandProps, UIExpandState> {

	static defaultProps = {
		header: 'Toggle',
		hasToggleIcon: true,
		renderToggleIcon: (isExpanded: any) => <UIIcon size="medium" icon={isExpanded ? 'angleDown' : 'angleRight'}/>,
		defaultExpand: true,
		children: ''
	}
	state = {
		isExpanded: this.props.defaultExpand
	}


	expand = () => {
		this.setState({isExpanded: false})
	}

	collapse = () => {
		this.setState({isExpanded: true})
	}

	toggle = () => {
		this.setState(prevState => ({isExpanded: !prevState.isExpanded}))
	}

	render() {
		const {header, children, hasToggleIcon, renderToggleIcon, ...passProps} = this.props
		const {isExpanded} = this.state

		return (
			<Expand {...passProps} data-expanded={this.state.isExpanded || void 0}>
				<Header onClick={this.toggle}>
					{header}
					{children &&
					hasToggleIcon && (
						<UIButton variant="subtle" size="medium" compact>
							{renderToggleIcon(isExpanded)}
						</UIButton>
					)}
				</Header>
				{isExpanded && children && <Content>{children}</Content>}
			</Expand>
		)
	}
}

const Expand = styled.main<any>`
	display: block;
	width: 100%;
	& * {
		box-shadow: none;
	}
	&[data-expanded] {
		header {
		}
	}
`

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 5px;
	padding-bottom: 5px;
	cursor: pointer;
	& input {
		box-shadow: none !important;
	}
	& label {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		flex: 1;
		cursor: pointer;
		font-size: 12px;
	}
`

const Content = styled.main<any>`
	padding: 8px;
	> div {
		&:last-child {
			border-bottom: none;
		}
	}
`
