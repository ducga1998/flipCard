export type icons = 'alarm' | string

export interface IUIIconProps {
    size?: 'large' | 'medium' | 'small' | 'tiny'
    icon: icons
    style?: object,
    className?: string
}