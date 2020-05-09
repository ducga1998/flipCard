import {Placement} from 'popper.js'

export interface IProps {
    target: any
    open?: boolean
    defaultOpen?: boolean
    onClose?: () => void;
    placement?: Placement
    offset?: string
    flip?: boolean
    fullWidth?: boolean
    onOpen?: (data: { popup: HTMLElement, target: HTMLElement }) => void;
    onToggle?: (state: boolean) => void;
    onFocusOut?: () => void;
    autoFocus?: boolean
    clickDismiss?: boolean

    [key: string]: any
}

export interface IState {
    open: boolean
}