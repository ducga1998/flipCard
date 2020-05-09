import React, {createRef, RefObject} from 'react'
import UIIcon from 'UI/Icon'
import UIWidget from 'UI/Widget'
import {Content, Footer, Header, Modal} from './styled'
import {IModalProps} from './types'

export default class UIModal extends React.Component<IModalProps> {
	static Modal = Modal
	static Header = Header
	static Footer = Footer
	static Content = Content

	static defaultProps = {
		open: false,
		dimmed: false
	}
	widgetRef: UIWidget
	modalRef: RefObject<any> = createRef()
	bodyOverflowStyle: string

	render() {
		const {open, actions, children, custom, title, width, height, style, onClose, onDismiss, ...props} = this.props

		return open && (
			<UIWidget
				dimmed
				overlay
				ref={(ref: UIWidget) => {
					this.widgetRef = ref
					if (ref) {
						// this.modalRef.current.focus()
						this.bodyOverflowStyle = this.bodyOverflowStyle || this.modalRef.current.ownerDocument.body.style.overflow
						this.modalRef.current.ownerDocument.body.style.overflow = 'hidden'
					} else {
						this.bodyOverflowStyle = null
						this.modalRef.current.ownerDocument.body.style.overflow = this.bodyOverflowStyle
					}
				}}
				onMouseDownCapture={e => {
					if (e.target === e.currentTarget) {
						e.preventDefault()
					}
				}}
				onClickCapture={e => {
					if (typeof onDismiss === 'function' && e.target === e.currentTarget) {
						onDismiss()
					}
				}}
			>
				<Modal tabIndex={0} {...props} style={{width, height, ...style}} ref={this.modalRef}>
					{title && <Header>
						{title || 'Untitled'}
						{onClose && <span onClick={onClose}>
							<UIIcon icon="times" size="medium"/>
						</span>}
					</Header>}
					{custom ? (typeof children === 'function' ? children() : children) :
						<Content>
							{typeof children === 'function' ? children() : children}
						</Content>}
					{actions && <Footer>{actions}</Footer>}
				</Modal>
			</UIWidget>
		)
	}
}
