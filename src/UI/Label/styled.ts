import styled from 'styled-components'
import { LabelProps } from "../Label/types";

export const StyledLabel = styled.div<LabelProps>`
	font-size: 14px;
	line-height: 20px;
	color: ${p => p.theme.D100};
	span {
		margin-left: 4px;
		color: ${p => p.theme.R100}; 
	}
`