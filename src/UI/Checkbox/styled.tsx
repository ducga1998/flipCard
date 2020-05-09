import styled from 'styled-components'

export const Checkbox = styled.label<any>`
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 14px;
	line-height: 16px;
	min-width: 16px;
	& input {
		cursor: pointer; 
		position: relative;
		border: 1px solid ${p => p.theme.N100};
		background: ${p => p.theme.N10};
		border-radius: 3px;
		height: 16px;
		width: 16px;
		${p => p.hasText && `margin-right: 10px`};
		&:checked {
			background: ${p => p.theme.P100};
			border-color: ${p => p.theme.P100};
			&:before {
				position: absolute;
				font-weight: 700;
				top: -3px;
				font-size: 15px;
				left: ${p => p.mixed ? '3px' : '1px'};
				color: ${p => p.theme.N0};
				content: ${p => p.mixed ? `'\u2013'` : `'\u2713'`};
			}
		}
		&:disabled {
			background: ${p => p.theme.N20};
			border-color: ${p => p.theme.N100};
			&:before {
				color: ${p => p.theme.N100};
			}
		}
	}
`
