import React from 'react'
import styled from 'styled-components'
import UICollapsible from 'UI/Collapsible'
import UIIcon from 'UI/Icon'

interface AccordionProps {
    open?: boolean
    defaultOpen?: boolean
    title: string | React.ReactNode
    onToggle?: (boolean) => void
    style?: any
}

interface AccordionState {
    open: boolean
}

const Accordion = styled.div`
	position: relative;
	padding: 3px 16px;
	font-size: 12px;
	line-height: 1.5em;
	font-weight: bold;
	color: ${p => p.theme.D50};
	text-transform: uppercase;
	margin: -1px;
	cursor: pointer;
	border: 1px solid ${p => p.theme.N100};
    background-color: ${p => p.theme.N10};
    aside {
        display: flex;
        position: absolute;
        top: 50%;
        right: 3px;
        transform: translateY(-50%);
        width: 16px;
        text-align: center;
		path {
			fill: ${p => p.theme.D70}
		}
    }
`
const Content = styled.div`
`

export default class UIAccordion extends React.Component<AccordionProps, AccordionState> {
    static defaultProps = {
        defaultOpen: false,
        onToggle: () => {
        }
    }
    state = {
        open: typeof this.props.open !== 'undefined' ? this.props.open : this.props.defaultOpen
    }
    toggle = async () => {
        if (typeof this.props.open !== 'undefined') {
            this.props.onToggle(!this.props.open)
        } else {
            await this.setState(state => ({open: !state.open}))
            this.props.onToggle(this.state.open)
        }
    }
    handleMouseDown = e => {
        e.preventDefault()
    }

    componentDidUpdate(prevProps) {
        if (this.props.open !== prevProps.open && typeof this.props.open !== 'undefined') {
            this.setState({open: this.props.open})
        }
    }

    render() {
        const {children, title, style} = this.props
        const open = typeof this.props.open !== 'undefined' ? this.props.open : this.state.open
        return (
            <>
                <Accordion
                    onMouseDown={this.handleMouseDown}
                    onClick={this.toggle}
                    style={style}
                >
                    {title}
                    <aside>
                        <UIIcon size="small" icon={open ? 'angleUp' : 'angleDown'}/>
                    </aside>
                </Accordion>
                <UICollapsible open={open}>
                    <Content>
                        {children}
                    </Content>
                </UICollapsible>
            </>
        )
    }
}