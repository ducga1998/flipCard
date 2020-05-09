import Popper from 'popper.js'
import React from 'react'
import ReactDOM from 'react-dom'
import UIWidget from 'UI/Widget'
import {ArrowTooltip, StyledTooltip} from './styled'
import {ArrowPosition, TooltipProps} from './types'

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({maxWidth, children, style, arrowPosition, offsetArrow, ...props}, ref) => {
    let arrowStyle
    const offset = offsetArrow - 4
    if (arrowPosition === 'top' || arrowPosition === 'bottom') {
        arrowStyle = {left: `calc(50% ${offset < 0 ? `- ${Math.abs(offset)}` : `+ ${offset}`}px)`}
    } else if (arrowPosition === 'left' || arrowPosition === 'right') {
        arrowStyle = {top: `calc(50% ${offset < 0 ? `- ${Math.abs(offset)}` : `+ ${offset}`}px)`}
    }
    return (
        <StyledTooltip
            ref={ref}
            arrowPosition={arrowPosition}
            style={{maxWidth, ...style}}
            {...props}
        >
            {children}
            <ArrowTooltip arrowPosition={arrowPosition} style={arrowStyle}/>
        </StyledTooltip>
    )
})

interface UITooltipProps {
    content: string
}

interface UITooltipState {
    visible: boolean
    arrowPos: ArrowPosition
    arrowOffset: number
}

const fooElement = document.createElement('div')

export default class UITooltip extends React.Component<UITooltipProps, UITooltipState> {
    state: UITooltipState = {
        visible: false,
        arrowPos: 'bottom',
        arrowOffset: 0
    }
    popper: any
    targetRef: Element | Text
    tooltipRef: React.RefObject<any> = React.createRef()

    componentDidMount() {
        this.targetRef = ReactDOM.findDOMNode(this)
        this.targetRef.addEventListener('mouseenter', this.handleMouseEnter)
        this.targetRef.addEventListener('mouseleave', this.handleMouseLeave)
        if (this.targetRef instanceof Element) {
            this.popper = new Popper(this.targetRef, fooElement, {
                placement: 'top',
                modifiers: {
                    flip: {
                        enabled: false,
                        behavior: 'flip',
                        boundariesElement: 'viewport'
                    },
                    preventOverflow: {
                        enabled: true,
                        padding: 0,
                        boundariesElement: 'viewport'
                    },
                    offset: {
                        enabled: true,
                        offset: '0,5px'
                    }
                },
                onCreate: this.handlePosition,
                onUpdate: this.handlePosition
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.popper && this.state.visible !== prevState.visible && this.state.visible) {
            this.popper.popper = this.tooltipRef.current
            this.popper.update()
        }
    }

    componentWillUnmount() {
        this.targetRef.removeEventListener('mouseenter', this.handleMouseEnter)
        this.targetRef.removeEventListener('mouseleave', this.handleMouseLeave)
        this.targetRef = null
        if (this.popper) {
            this.popper.destroy()
        }
    }

    handlePosition = pos => {
        this.setState({
            arrowPos: pos.flipped ? 'top' : 'bottom',
            arrowOffset: Math.round(pos.popper.left - pos.offsets.popper.left)
        })
    }
    handleMouseEnter = async () => {
        await this.setState({visible: true})
    }
    handleMouseLeave = async () => {
        await this.setState({visible: false})
    }

    render() {
        const {children, content} = this.props
        const {visible} = this.state
        return <>
            {children}
            {visible && (
                <UIWidget indexOffset={1000}>
                    <Tooltip
                        ref={this.tooltipRef}
                        arrowPosition={this.state.arrowPos}
                        offsetArrow={this.state.arrowOffset}
                    >
                        {content}
                    </Tooltip>
                </UIWidget>
            )}
        </>
    }
}