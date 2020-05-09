export interface UICheckboxProps {
    onChange?: (value?: boolean) => void
    value?: boolean
    className?: string
    disabled?: boolean
    children?: React.ReactChild
    defaultValue?: boolean
    mixed?: boolean
    style?: object
}
