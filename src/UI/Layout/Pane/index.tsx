import styled from 'styled-components'

const UIPane = styled.div`
	border: 1px solid ${p => p.theme.N100};
	background: ${p => p.theme.N0};
	border-radius: 2px;
	padding: 8px 0;
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
	ul:first-child {
		> h3 {
			border-top: 0;
		}
	}
`
export const Pane = styled(UIPane)`
    width: 100%;
    border-radius: 2px;
    padding: 0;
    height: 166px;
    ul {
        height: 100%;
        li {
        	padding: 0;
        	> div {
				flex: 1
			}
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
    }
    && button {
        border: none;
        margin-left: 0;
        &:last-child {
        	margin-right: 4px;
        }
        &:active {
        	border: 0;
        }
    }

    .empty-array {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        text-align: center;
    }

    + button {
        width: 100%
    }
`

export default UIPane