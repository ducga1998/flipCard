import React from 'react'
import styled from 'styled-components'

const UIContent = styled.div<{ dark?: boolean }>`
	padding: 16px;
	background: ${p => p.dark ? p.theme.N10 : p.theme.N0};
	&:not(:first-child) {
		border-top: 1px solid ${p => p.theme.N100};
	}
	::-webkit-scrollbar-track {
			box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
			background: #f8f8f8;
		}
		::-webkit-scrollbar {
			width: 6px;
			height: 6px;
			background: #f8f8f8;
		}
		::-webkit-scrollbar-thumb {
			background: #e4e4e4;
			border-radius: 6px;
		}
`

export default UIContent