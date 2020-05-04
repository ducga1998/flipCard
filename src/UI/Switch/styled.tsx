import React from 'react'
import styled from 'styled-components'

export const Switch = styled.div`
	& {
		position: relative;
		display: inline-block;
		width: 32px;
		height: 16px;
		input {
			opacity: 0;
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: 1;
			cursor: pointer;
			&:checked {
				+ span {
					background: ${p => p.theme.P100};
					&:before {
						left: 17px;
					}
				}
			}
			&:disabled {
				pointer-events: none;
				&:checked + span {
					background: ${p => p.theme.P40};
				}
				+ span:before {
					background: ${p => p.theme.N20};
				}
			}
		}
		span {
			position: absolute;
			background: ${p => p.theme.N100};
			width: 32px;
			height: 16px;
			border-radius: 32px;
			transition: background .3s;
			&:before {
				position: absolute;
				content: '';
				height: 14px;
				width: 14px;
				background: #fff;
				transition: left .35s;
				border-radius: 50%;
				background: ${p =>  p.theme.N0};
				top: 1px;
				left: 1px;
			}
		}
	}
`