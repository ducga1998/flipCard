import Popper from 'popper.js'
import React from 'react'
import styled from 'styled-components'
import UIWidget from 'UI/Widget'

import {IProps, IState} from './types'

const Popup = styled.div`
	position: absolute;
	&[x-out-of-boundaries] {
		display: none;
		visibility: hidden;
		opacity: 0;
	}
`
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
	pointer-events: none;
	* {
		pointer-events: initial;
	}
`

const watchers: Set<() => void> = new Set()

function compareBox(a, b) {
    return a.left === b.left && a.top === b.top && a.bottom === b.bottom && a.right === b.right
}

requestAnimationFrame(function loop() {
    watchers.forEach(async handle => await handle())
    requestAnimationFrame(loop)
})

export default class UIPopover extends React.Component<IProps, IState> {
    popper: Popper
    dummy: HTMLDivElement = document.createElement('div')
    targetRef: React.RefObject<any> = React.createRef()
    popupRef: React.RefObject<any> = React.createRef()

    static defaultProps = {
        placement: 'bottom-start',
        offset: '0,3px',
        flip: false,
        defaultOpen: false,
        fullWidth: false,
        autoFocus: false,
        clickDismiss: false
    }

    state = {
        open: this.props.defaultOpen
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            open: typeof nextProps.open !== 'undefined' ? nextProps.open : prevState.open
        }
    }

    componentDidMount(): void {
        this.popper = new Popper(this.targetRef.current, this.popupRef.current || this.dummy, {
            placement: this.props.placement,
            modifiers: {
                flip: {
                    enabled: this.props.flip,
                    behavior: 'flip',
                    boundariesElement: 'viewport'
                },
                preventOverflow: {
                    enabled: true,
                    padding: 0,
                    boundariesElement: 'scrollParent'
                },
                offset: {
                    enabled: true,
                    offset: this.props.offset
                },
                hide: {
                    enabled: true
                }
            }
        })
        watchers.add(this.handleSize)
    }

    componentDidUpdate(prevProps, prevState): void {
        this.popper.options.modifiers.flip.enabled = this.props.flip
        this.popper.options.modifiers.offset.offset = this.props.offset
        if (prevState.open !== this.state.open) {
            this.popper.popper = this.state.open ? this.popupRef.current : this.dummy
            this.handleUpdate()
            console.log(window.scrollY)
        }
    }

    componentWillUnmount(): void {
        this.popper && this.popper.destroy()
        watchers.delete(this.handleSize)
    }

    get isControlled() {
        return typeof this.props.open !== 'undefined'
    }

    currentTargetBox: ClientRect
    currentPopupBox: ClientRect
    handleSize = () => {
        if (this.state.open) {
            const targetBox = this.targetRef.current.getBoundingClientRect()
            const popupBox = this.popupRef.current.getBoundingClientRect()
            if (!this.currentTargetBox || !this.currentPopupBox) {
                this.currentTargetBox = targetBox
                this.currentPopupBox = popupBox
            }
            if (!compareBox(targetBox, this.currentTargetBox) || !compareBox(popupBox, this.currentPopupBox)) {
                this.handleUpdate()
            }
            this.currentTargetBox = targetBox
            this.currentPopupBox = popupBox
        }
    }
    handleUpdate = () => {
        if (this.state.open && this.props.fullWidth) {
            this.popupRef.current.style.width = this.targetRef.current.offsetWidth + 'px'
        }
        this.popper.update()
        if (this.popupRef.current && this.props.autoFocus && !this.popupRef.current.matches(':focus-within')) {
            this.popupRef.current.focus()
        }
    }
    focusing: boolean = false
    handleBlur = e => {
        if (this.focusing) return
        if (this.props.onBlur) {
            this.props.onBlur(e)
        }
        if (this.popupRef.current && this.targetRef.current) {
            if (!e.relatedTarget || !this.popupRef.current.contains(e.relatedTarget) && !this.targetRef.current.contains(e.relatedTarget)) {
                this.setState({open: false})
                if (this.props.onFocusOut) {
                    this.props.onFocusOut()
                }
            }
        }
    }
    handleFocus = (e) => {
        this.focusing = true
        e.preventDefault()
        setTimeout(async () => {
            if (this.props.onFocus) {
                this.props.onFocus(e)
            }
            if (typeof this.props.open === 'undefined' && !this.state.open) {
                await this.setState({open: true})
            }
            this.focusing = false
        })
    }
    handleMouseDown = async e => {
        if (this.props.clickDismiss && typeof this.props.open === 'undefined' && this.state.open && this.targetRef.current.contains(e.target)) {
            e.preventDefault()
            await this.setState({open: false})
            if (this.props.onFocusOut) {
                this.props.onFocusOut()
            }
            // Lose focus so button can be focused later to open
            document.body.focus()
        }
    }

    render() {
        const {target, children, onFocusOut, ...restProps} = this.props
        const {open} = this.state
        const extraProps = {
            onMouseDown: target.props.onMouseDown ? e => {
                target.props.onMouseDown(e)
                this.handleMouseDown(e)
            } : this.handleMouseDown,
            onFocus: target.props.onFocus ? e => {
                target.props.onFocus(e)
                this.handleFocus(e)
            } : this.handleFocus,
            onBlur: target.props.onBlur ? e => {
                target.props.onBlur(e)
                this.handleBlur(e)
            } : this.handleBlur
        }
        if (target.ref) {
            this.targetRef = target.ref
        }
        return (
            <>
                {React.cloneElement(target, {
                    ref: this.targetRef,
                    ...extraProps
                })}
                {open && (
                    <UIWidget>
                        <Overlay>
                            <Popup
                                tabIndex={1}
                                ref={this.popupRef}
                                {...extraProps}
                                {...restProps}
                            >
                                {children}
                            </Popup>
                        </Overlay>
                    </UIWidget>
                )}
            </>
        )
    }
}