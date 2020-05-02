export interface IButtonProps {
    [key: string]: any;

    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'dark' | 'link' | 'subtle' | 'transparent' | 'invert';
    size?: 'large' | 'small';
    iconBefore?: string;
    iconAfter?: string;
    children?: any;
    disabled?: boolean;
    loading?: boolean;
    fitContainer?: boolean;
    active?: boolean;
    compact?: boolean;
    onClick?: () => void;
    style?: object;
}

