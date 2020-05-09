export type ArrowPosition = 'top' | 'bottom'

export type TooltipProps = {
    /** Set the tooltip max width */
    maxWidth?: number;
    /** Set the tooltip children */
    children?: any;
    /** Set arrow position (top||left||right||bottom) */
    arrowPosition?: ArrowPosition;
    /** Set arrow position offset */
    offsetArrow?: number;
    /** Custom style */
    style?: any
}
