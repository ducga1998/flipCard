import React from 'react'
import styled, {css} from 'styled-components'
import {IButtonProps} from './types'

const StyledButton = styled.button<IButtonProps>`
	display: ${p => p.fitContainer ? 'block' : 'inline-block'};
	width: ${p => p.fitContainer ? '100%' : null};
	border-radius: 2px;
	position: relative;
	font-weight: 500;
	font-size: ${p => p.size === 'small' ? '12px' : '14px'};
	height: ${p => p.size === 'small' ? '24px' : '32px'};
	line-height: 0;
	// transition: all .3s;
	//border: 0;
	cursor: ${p => p.loading ? 'not-allowed' : 'pointer'};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	${p => p.compact ? ButtonCompact : ButtonPadding};
	${p => p.active ? 'z-index: 1' : null};
	& + & {
		margin-left: ${p => p.fitContainer ? 0 : '8px'};
	}
	svg {
		${p => p.loading && !p.disabled ? LoadingSVGStyle : SVGStyle}
	}
	&&&[disabled] {
		border: 1px solid ${p => p.theme.N100};
		background: ${p => p.theme.N20};
		color: ${p => p.theme.N100};
		cursor: not-allowed;
		path {
			fill: ${p => p.theme.N100};
		}
		&:hover {
			background: ${p => p.theme.N20};
			color: ${p => p.theme.N100};
		}
	}
`

const ButtonCompact = css<IButtonProps>`
	padding: 0;
	min-width: ${props => props.size === 'small' ? '24px' : '32px'} !important;
`

const ButtonPadding = css<IButtonProps>`
	padding: 0 ${p => !p.children[2] || p.size === 'small' ? '8px' : '16px'};
`

const LoadingButtonStyle = css`
	color: transparent;
	pointer-events: none;
`

const SVGStyle = css<IButtonProps>`
	vertical-align: sub;
	margin-left: ${p => p.iconAfter && p.children[2] ? '8px' : null};
	margin-right: ${p => p.iconBefore && p.children[2] ? '8px' : null};
`

const LoadingSVGStyle = css<IButtonProps>`
	&:first-child {
		vertical-align: sub;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		margin: 0;
	}
	& ~ svg {
		visibility: hidden;
	    margin-left: ${p => p.iconAfter && p.children[2] ? '8px' : null};
		margin-right: ${p => p.iconBefore && p.children[2] ? '8px' : null};
	    vertical-align: sub;
	}
`

const PseudoPrimaryButtonStyle = css`
	&:hover {
		background: ${p => p.theme.P90};
		border: 1px solid ${p => p.theme.P90};
	}
	&:active {
		background: ${p => p.theme.P200};
		border: 1px solid ${p => p.theme.P200};
	}
`

const PseudoSecondaryButtonStyle = css`
	&:hover {
		background: ${p => p.theme.N20};
	}
	&&:active {
		background: ${p => p.theme.P20};
		color: ${p => p.theme.P100};
		border-color: ${p => p.theme.P40};
		path {
			fill: ${p => p.theme.P100};
		}
	}
`

const PseudoDangerButtonStyle = css`
	&:hover {
		background: ${p => p.theme.R80};
		border: 1px solid ${p => p.theme.R80};
	}
	&:active {
		background: ${p => p.theme.R100};
		border: 1px solid ${p => p.theme.R100};
	}
`

const PseudoWarningButtonStyle = css`
	&:hover {
		background: ${p => p.theme.Y80};
		border: 1px solid ${p => p.theme.Y80};
	}
	&:active {
		background: ${p => p.theme.Y100};
		border: 1px solid ${p => p.theme.Y100};
	}
`

const PseudoSuccessButtonStyle = css`
	&:hover {
		background: ${p => p.theme.G80};
		border: 1px solid ${p => p.theme.G80};
	}
	&:active {
		background: ${p => p.theme.G100};
		border: 1px solid ${p => p.theme.G100};
	}
`

const PseudoInfoButtonStyle = css`
	&:hover {
		background: ${p => p.theme.B80};
		border: 1px solid ${p => p.theme.B80};
	}
	&:active {
		background: ${p => p.theme.B100};
		border: 1px solid ${p => p.theme.B100};
	}
`

const PseudoDarkButtonStyle = css`
	&:hover {
		background: ${p => p.theme.D80};
		border: 1px solid ${p => p.theme.D80};
	}
	&:active {
		background: ${p => p.theme.D100};
		border: 1px solid ${p => p.theme.D100};
		color: #fff;
	}
`

const PseudoSubtleButtonStyle = css`
	&:hover {
		background: ${p => p.theme.N20};
		border: 1px solid ${p => p.theme.N20};
	}
	&&:active {
		background: ${p => p.theme.P20};
		border: 1px solid ${p => p.theme.P20};
		color: ${p => p.theme.P100};
		path {
			fill: ${p => p.theme.P100};
		}
	}
`

const PseudoTransparentButtonStyle = css`
	&&:hover {
		color: ${p => p.theme.D100};
		path {
			fill: ${p => p.theme.D100};
		}
	}
	&&:active {
		color: ${p => p.theme.D100};
		path {
			fill: ${p => p.theme.D100};
		}
	}
`

const PrimaryButtonStyle = css<IButtonProps>`
	color: #fff;
	${p => p.active ? null : PseudoPrimaryButtonStyle}
`

const SecondaryButtonStyle = css<IButtonProps>`
	color: ${p => p.active ? p.theme.P100 : p.theme.D70};
	${p => p.active ? null : PseudoSecondaryButtonStyle}
`

const DangerButtonStyle = css<IButtonProps>`
	color: #fff;
	${p => p.active ? null : PseudoDangerButtonStyle}
`

const WarningButtonStyle = css<IButtonProps>`
	color: ${p => p.theme.D100};
	${p => p.active ? null : PseudoWarningButtonStyle}
`

const SuccessButtonStyle = css<IButtonProps>`
	color: #fff;
	${p => p.active ? null : PseudoSuccessButtonStyle}
`

const InfoButtonStyle = css<IButtonProps>`
	color: ${p => p.theme.D100};
	${p => p.active ? null : PseudoInfoButtonStyle}
`

const DarkButtonStyle = css<IButtonProps>`
	color: ${p => p.theme.N20};
	${p => p.active ? null : PseudoDarkButtonStyle}
`

const SubtleButtonStyle = css<IButtonProps>`
	color: ${p => p.active ? p.theme.P100 : p.theme.D70};
	${p => p.active ? null : PseudoSubtleButtonStyle}
	&&&&:disabled {
		background: transparent;
		border: none;
	}
`

const TransparentButtonStyle = css<IButtonProps>`
	color: ${p => p.active ? p.theme.D100 : p.theme.D70};
	${p => p.active ? null : PseudoTransparentButtonStyle}
	&&&&&:disabled {
		background: transparent;
		border: none;
	}
`

const InvertButtonStyle = css<IButtonProps>`
	color: ${p => p.theme.N10};
`

export const PrimaryButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.P200 : p.theme.P100};
	border: 1px solid ${p => p.active ? p.theme.P200 : p.theme.P100};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : PrimaryButtonStyle}
	&& path {
		fill: #fff;
	}
`

export const SecondaryButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.P20 : p.theme.N10};
	border: 1px solid ${p => p.active ? p.theme.P40 : p.theme.N100};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : SecondaryButtonStyle}
	&& path {
		fill: ${p => p.active ? p.theme.P100 : p.theme.D70};
	}
`

export const DangerButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.R100 : p.theme.R90};
	border: 1px solid ${p => p.active ? p.theme.R100 : p.theme.R90};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : DangerButtonStyle}
	&& path {
		fill: #fff;
	}
`
export const WarningButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.Y100 : p.theme.Y90};
	border: 1px solid ${p => p.active ? p.theme.Y100 : p.theme.Y90};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : WarningButtonStyle}
	&& path {
		fill: ${p => p.theme.D100};
	}
`

export const SuccessButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.G100 : p.theme.G90};
	border: 1px solid ${p => p.active ? p.theme.G100 : p.theme.G90};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : SuccessButtonStyle}
	&& path {
		fill: #fff;
	}
`

export const InfoButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.B100 : p.theme.B90};
	border: 1px solid ${p => p.active ? p.theme.B100 : p.theme.B90};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : InfoButtonStyle}
	&& path {
		fill: ${p => p.theme.D100};
	}
`

export const DarkButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.D100 : p.theme.D90};
	border: 1px solid ${p => p.active ? p.theme.D100 : p.theme.D90};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : DarkButtonStyle}
	&& path {
		fill: ${p => p.theme.N20};
	}
`

export const SubtleButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: ${p => p.active ? p.theme.P20 : 'none'};
	border: 1px solid ${p => p.active ? p.theme.P20 : 'transparent'};
	${p => p.loading && !p.disabled ? LoadingButtonStyle : SubtleButtonStyle}
	&& path {
		fill: ${p => p.active ? p.theme.P100 : p.theme.D70};
	}
`

export const TransparentButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: transparent;
	border: 1px solid transparent;
	${p => p.loading && !p.disabled ? LoadingButtonStyle : TransparentButtonStyle}
	&& path {
		fill: ${p => p.theme.D70};
	}
`

export const InvertButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) <IButtonProps>`
	background: transparent;
	border: 1px solid transparent;
	${p => p.loading && !p.disabled ? LoadingButtonStyle : InvertButtonStyle}
	path {
		fill: ${p => p.theme.N10};
	}
`

const LoadingLinkStyle = css`
	${LoadingButtonStyle};
`

const PseudoLinkStyle = css`
	&:hover, &:active {
		cursor: pointer;
	}
	&:hover {
		color: ${p => p.theme.P90};
		text-decoration: underline;
	}
	&:active {
		color: ${p => p.theme.P200};
		text-decoration: none;
	}
`

const LinkStyle = css<IButtonProps>`
	&& {
		color: ${p => p.active ? p.theme.P200 : p.theme.D70};
		${p => p.active ? null : PseudoLinkStyle}
	}
`

export const Link = styled.a<IButtonProps>`
	display: inline-block;
	position: relative;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	cursor: ${p => p.loading ? 'not-allowed' : 'pointer'};
	font-size: ${p => p.size === 'small' ? '12px' : '14px'};
	line-height: ${p => p.size === 'small' ? '16px' : '20px'};
	svg {
		${p => p.loading && !p.disabled ? LoadingSVGStyle : SVGStyle}
	}
	path {
		fill: ${p => p.theme.P100};
	}
	${p => p.loading && !p.disabled ? LoadingLinkStyle : LinkStyle}
	&[disabled] {
		cursor: not-allowed;
		color: ${p => p.theme.N100};
		path {
			fill: ${p => p.theme.N100};
		}
		&:hover {
			text-decoration: none;
		}
	}
`