import React from 'react'
import ReactDOM from 'react-dom'
import styled, {css} from 'styled-components'

const dimmed = css`
	background: rgba(0, 0, 0, .5);
`
const flex = css`
	display: flex;
	align-items: center;
	justify-content: center;
`
const floating = css`
	pointer-events: none;
	> * {
		pointer-events: initial !important;
	}
`

const Container = styled.div<any>`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	
	${p => p.floating ? floating : flex}
	${p => p.dimmed ? dimmed : ''}
`

export interface IWidgetProps {
    [key: string]: any;

    overlay?: boolean;
    floating?: boolean;
    dimmed?: boolean;
    indexOffset?: number
}

export default class UIWidget extends React.Component<IWidgetProps> {

    static zIndex = 1000
    static defaultProps = {
        indexOffset: 0
    }

    overlayRef: React.RefObject<any> = React.createRef()

    bringToTop = () => {
        const el = ReactDOM.findDOMNode(this)
        if (el instanceof HTMLElement) {
            el.style.zIndex = ((UIWidget.zIndex++) + this.props.indexOffset).toString()
        }
    }

    componentDidMount() {
        this.bringToTop()
    }

    render() {
        const {overlay, ...props} = this.props
        return ReactDOM.createPortal(overlay ?
            <Container {...props} ref={this.overlayRef}/> : props.children, document.body)
    }
}