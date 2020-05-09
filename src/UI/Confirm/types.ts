import {ReactElement, ReactNode} from "react"

export default interface IUIConfirmProps {
    content: string | ReactNode | ReactElement<any>
    width?: number
    height?: number
    title?: string
    displayCloseButton?: boolean
    pending?: boolean
    showDontAsk?: boolean
    dontAskDefault?: boolean
    dontAskContent?: string
    close?: () => void
    onConfirm?: (dontAskAgain?: boolean) => void
    onCancel?: (dontAskAgain?: boolean) => void
    defaultOnClose?: boolean // default when click x button: cancel or confirm
    confirmButton?: string
    cancelButton?: string
}