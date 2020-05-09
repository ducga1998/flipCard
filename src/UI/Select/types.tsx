export interface SelectProps {
    value?: any
    onChange?: (val) => void
    options: any
    searchable?: boolean
    customItemView?: (item: any) => any
    placeholder?: string
    searchKey?: string
    valueKey?: string
    style?: object,
    styleContent?: object,
    disabled?: boolean
}