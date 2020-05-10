import React from 'react'
import {
    DangerButton,
    DarkButton,
    InfoButton,
    InvertButton,
    Link,
    PrimaryButton,
    SecondaryButton,
    SubtleButton,
    SuccessButton,
    TransparentButton,
    WarningButton
} from './styled'
import {IButtonProps} from './types'

import Icon from 'UI/Icon'

const UIButton = React.forwardRef<HTMLElement, IButtonProps>((props, ref) => {
    const {variant, disabled, loading, children, iconBefore, iconAfter, size, onClick} = props
    let ButtonComponent: any
    switch (variant) {
        case 'primary':
            ButtonComponent = PrimaryButton
            break
        case 'danger':
            ButtonComponent = DangerButton
            break
        case 'warning':
            ButtonComponent = WarningButton
            break
        case 'success':
            ButtonComponent = SuccessButton
            break
        case 'info':
            ButtonComponent = InfoButton
            break
        case 'dark':
            ButtonComponent = DarkButton
            break
        case 'subtle':
            ButtonComponent = SubtleButton
            break
        case 'transparent':
            ButtonComponent = TransparentButton
            break
        case 'invert':
            ButtonComponent = InvertButton
            break
        case 'link':
            ButtonComponent = Link
            break
        case 'secondary':
        default:
            ButtonComponent = SecondaryButton
            break
    }

    return (
        <ButtonComponent ref={ref} {...props} loading={loading ? loading.toString() : undefined} disabled={disabled}
                         onClick={onClick}>
            {loading && !disabled && (
            	<Icon icon='loading' size={size === 'small' ? 'tiny' : 'small'}/>
            )}
            {iconBefore && <Icon icon={iconBefore} size={size === 'small' ? 'tiny' : 'small'}/>}
            {children}
            {iconAfter && <Icon icon={iconAfter} size={size === 'small' ? 'tiny' : 'small'}/>}
        </ButtonComponent>
    )
})

UIButton.defaultProps = {
    variant: 'secondary',
    size: 'large',
    iconBefore: null,
    iconAfter: null,
    disabled: false,
    fitContainer: false,
    active: false,
    compact: false
}

export default UIButton