import styled, {css} from 'styled-components'

export const StyledListTitle = styled.h3`
    background: ${p => p.theme.N10};
    margin: 0;
    padding: 4px 4px 4px 8px;
    border-bottom: 1px solid ${p => p.theme.D20};
    border-top: 1px solid ${p => p.theme.D20};
    color: ${p => p.theme.D50};
    font-size: 12px;
    text-transform: uppercase;
`

const sharedListCss = css`
    list-style: none;
    width: 100%;
    //max-height: 100%;
    margin: 0;
    overflow-y: auto;
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
const relaxedCss = css`
    > li {
        margin-bottom: 4px;
    }
`
const divideGridCollumn = (cols, spacing) => `
    > div {
        margin: -${(spacing / 2) || 2}px;
        > div {
            display: inline-block;
            box-sizing: border-box;
            width: ${100 / (cols || 4)}%;
            padding: ${(spacing / 2) || 2}px;
        }
    }       
`

const hoverItemCss = css`
    background: ${p => p.theme.N20}
`
const activeItemCss = hasBorder => css`
    position: relative;
    z-index: 2;
    background: ${p => p.theme.P20};
    ${p => hasBorder && `border: 1px solid ${p.theme.P40}`};
    color: ${p => p.theme.P100};
    div {
        color: ${p => p.theme.P100};
    }
`
const borderedItemCss = isInteractive => css`
    border: 1px solid ${p => p.theme.D20};
    border-radius: 2px;
    ${p => isInteractive && (
    `:active { border-color: ${p.theme.P40}}`
)}
`
const interactiveItemCss = css`  
    :hover {
        background: ${p => p.theme.N20};
    }

    :active {
        background: ${p => p.theme.P20};
        color: ${p => p.theme.P200};
        > * {
        color: ${p => p.theme.P200};
        }
    }
   
`

export const StyledList = styled.ul<any>`
    ${sharedListCss}
    ${p => p.padded ? 'padding: 8px' : 'padding: 0'};
    ${p => p.relaxed && relaxedCss};
    > li {
        padding: 4px 4px 4px 8px;
        button.drag-selector, button.drag-handler {
        	cursor: grab;
        	&:focus, &:focus-within, &:active {
        		cursor: grabbing;
        	}
        }
    }

    && .placeholder {
        background: ${p => p.theme.D20};
        border: 1px solid transparent;

        > * {
            visibility: hidden;
        }
    }

    .chosen, .fallback {
        ${activeItemCss(false)};
        border-color: ${p => p.theme.P40};
    }
`

export const StyledGridList = styled.ul<any>`
    ${sharedListCss};
    ${p => p.padded ? 'padding: 8px' : 'padding: 0'};
    ${p => divideGridCollumn(p.cols, p.spacing)};
`

export const StyledListItem = styled.li<any>`
	color: ${p => p.theme.D70}
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    user-select: none;
    ${p => p.bordered && borderedItemCss(p.interactive)}
    ${p => p.hovered && hoverItemCss}   
    ${p => (p.interactive && !p.active) && interactiveItemCss}
    ${p => p.active && activeItemCss(p.bordered)}
`

