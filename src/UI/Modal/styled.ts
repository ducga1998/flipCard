import styled from 'styled-components'
import {IModalProps} from 'UI/Modal/types'

export const Header = styled.header`
	position: relative;
	padding: 16px;
	font-size: 20px;
	font-weight: 500;
	border-bottom: 1px solid ${p => p.theme.N100};
	button, span {
		display: block;
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
	}
	path {
		fill: ${p => p.theme.D70};
	}
	
`

export const Footer = styled.footer`
	text-align: right;
	padding: 16px;
	border-top: 1px solid ${p => p.theme.N100};
	display: flex;
    justify-content: flex-end;
    > label {
    	margin-right: 16px;
    }
`
export const Content = styled.div`
	padding: 16px;
	overflow: auto;
	flex: 1;
`

export const Modal = styled.div<IModalProps>`
	display: grid;
	grid-template-rows: ${p => p.actions ? '56px 1fr 65px' : '56px 1fr'};
	width: ${p => p.size === 'large' ? '1104px' : p.size === 'small' ? '640px' : '736px'};
	max-width: 90%;
	//max-height: calc(100vh - 120px);
	background: ${p => p.theme.N0};
	border: 1px solid ${p => p.theme.N100};
	border-radius: 2px;
	color: ${p => p.theme.D100};
`