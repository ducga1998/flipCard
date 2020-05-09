import styled, {css} from 'styled-components'
import {TooltipProps} from "UI/Tooltip/types";

const ArrowPositionTop = css<TooltipProps>`
	bottom: 100%;
`

const ArrowPositionBottom = css<TooltipProps>`
	top: 100%;
	transform: rotate(180deg);
`

export const ArrowTooltip = styled.span<TooltipProps>`
	width: 8px;
	height: 8px;
	position: absolute;
	${props => props.arrowPosition === 'top' ? ArrowPositionTop : null}
	${props => props.arrowPosition === 'bottom' ? ArrowPositionBottom : null}
	left: ${props => props.offsetArrow ? props.offsetArrow : 'calc(50% - 4px)'};
	&:after {
		content: "";
		bottom: 0;
		position: absolute;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid ${props => props.theme.D100};
	}
`

export const StyledTooltip = styled.div<TooltipProps>`
	color: #fff;
	font-size: 12px;
	padding: 4px 8px;
	line-height: 16px;
	border-radius: 2px;
	display: inline-block;
	background: ${props => props.theme.D100};
	pointer-events: none;
`