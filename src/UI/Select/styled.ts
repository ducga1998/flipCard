import styled from 'styled-components'

export const $WrapItem = styled.div<any>`
	cursor: pointer;
	color: ${p => p.active ? p.theme.P100 : null};
	li {
		padding: 4px 4px 4px 8px;
	}
	div {
		padding: 4px 4px 4px 8px;
		svg {
			margin-right: 8px;
			width: 16px;
			height: 16px;
		}
		path {
			fill: ${p => p.theme.D70};
		}
	}
	div:hover {
		background: ${p => p.theme.N20}
	}
	div:active {
		color: ${p => p.theme.P200};
		background: ${p => p.theme.P20};
		path {
			fill: ${p => p.theme.P200};
		}
	}
	 &.selected-item {
        background: ${p => p.theme.P20}
        div:hover {
            background: ${p => p.theme.P20};
        }
        div {
            color: ${p => p.theme.P200};
        }
        path {
            fill: ${p => p.theme.P200};
        }
    }
`
export const $CustomItem = styled.div<any>`
    height: 32px;
    display: flex;
    padding: 0 8px;
    align-items: center;
    border-radius: 2px;
    position: relative;
    font-weight: 500;
    font-size: 14px;
	cursor: pointer;
	color: ${p => p.active ? p.theme.P200 : p.theme.D70};
	&[disabled] {
		background: ${p => p.theme.N20};
		cursor: not-allowed;
		path {
			fill: ${p => p.theme.N100};
		}
	}
    justify-content: space-between;
	background: ${p => p.active ? p.theme.P20 : p.theme.N10};
	border: 1px solid ${p => p.active ? p.theme.P40 : p.theme.N100};
	> div {
		color: ${p => p.active ? p.theme.P200 : p.theme.D70};
		svg {
			margin-right: 8px;
		}
	}
	svg {
		width: 16px;
		height: 16px;
		path {
			fill: ${p => p.active ? p.theme.P100 : p.theme.D70};
		}
	}
	
`
