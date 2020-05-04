import styled, { css } from 'styled-components'
import IGroupProps from './types'

const sharedGroupStyle = css`
    display: flex;
    align-items: center;
    background: ${props => props.theme.N0};
    & > *  {
    	min-width: 1px;
        border-radius: 0;
        margin: 0;
        margin-left: -1px !important;
    }

    & > :first-child {
        border-radius: 2px 0 0 2px;
    }
    & > :last-child {
        border-radius: 0 2px 2px 0;
        margin-left: -1px;
    }
    
`

export const StyledButtonGroup = styled.div<IGroupProps>`
    ${sharedGroupStyle};
    & > *  {
    	flex: ${props => props.autoWidthChildren ? 'auto' : 1};
    }
	> :not(:last-child) {
		border-top-right-radius: 0;
    	border-bottom-right-radius: 0;
	}
	> :not(:first-child) {
		border-top-left-radius: 0;
    	border-bottom-left-radius: 0;
	}
`

export const StyledInputGroup = styled.div`
    ${sharedGroupStyle};
    > div {
        flex: 1;            
    }
    input {
        padding: 0 6px 0 8px;
        flex: 1;
    }
`
