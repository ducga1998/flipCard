import styled, {css} from 'styled-components'

const Grid = styled.div<{ gap?: number, template: string, divided?: boolean }>`
	display: grid;
	padding: ${props => `${props.theme.gutter}px ${props.theme.gutter * 2}px`};
	align-items: center;
	& & {
		padding: 0;
	}
	gap: ${props => typeof props.gap !== 'undefined' ? `${props.gap / 2}px ${props.gap}px` : `${props.theme.gutter / 2}px ${props.theme.gutter}px`};
	${props => props.template && `grid-template-columns: ${props.template}`};
	${props => props.divided && divided}
`

const divided = css`
	border-bottom: 1px solid ${props => props.theme.D20};
`

export default Grid