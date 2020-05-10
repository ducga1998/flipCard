import React from 'react'
import {TextProps } from 'UI/Text/types'
import styled from 'styled-components'

const StyledText = styled.div<TextProps>`
	color: ${p => p.color === 'dark' ? p.theme.D100 : p.color === 'light' ? p.theme.D50 : p.theme.D70};
	& a{
		color: ${p => p.theme.D70};
		text-decoration: none;
		svg { 
			margin-left: 4px;
			path {
				fill: ${p => p.theme.D70};
			}
		}
		&:hover {
			text-decoration: underline;
			color: ${p => p.theme.D100};
			svg {
				path {
					fill: ${p => p.theme.D100};
				}
			}
		}
	}
`

export const Text = styled(React.forwardRef<HTMLDivElement, TextProps>((p, ref) => <StyledText ref={ref} {...p} />))<TextProps>`
	font-size: 14px;
	line-height: 20px;
`

export const SmallText = styled(React.forwardRef<HTMLDivElement, TextProps>((p, ref) => <StyledText ref={ref} {...p} />))<TextProps>`
	font-size: 12px;
	line-height: 16px;
`