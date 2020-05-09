export interface IListProps {
    cols?: number,
    relaxed?: boolean,
    padded?: boolean,
    spacing?: number,

    [key: string]: any
}

export interface IListItemProps {
    bordered?: boolean,
    hovered?: boolean,
    active?: boolean,
    interactive?: boolean,
    placeholder?: boolean,

    [key: string]: any
}