export interface InputProps {
    variant?: 'warning' | 'danger',
    value?: string | number,
    type?: string,
    placeholder?: string,
    onChange?: (e: any) => void,
    onClearInput?: () => void | boolean,
    className?: string,
    prefix?: any,
    suffix?: any,
    size?: 'large' | 'medium',
    disabled?: any,
    style?: object,
    forceUpdate?: boolean
    defaultValue?: string,

    [key: string]: any
}