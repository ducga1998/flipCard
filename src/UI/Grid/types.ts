export default interface GridProps {
    cols?: (number | string)[]
    gap?: number
    children?: any
    style?: object
    label?: string
    divided?: boolean,

    [key: string]: any
}