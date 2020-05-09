export interface IModalProps {
    [key: string]: any;

    open?: boolean;
    title?: string;
    dimmed?: boolean;
    size?: 'large' | 'medium' | 'small';
    width?: number | string;
    height?: number | string;
    style?: object;
    actions?: any;
    onBlur?: () => void;
    onClose?: () => void;
    onDismiss?: () => void;
    custom?: boolean;
}