import * as React from 'react'
import styled from 'styled-components'

const $Loading = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	svg {
        width: 44px;
        height: 44px;
        animation: rotate .8s linear infinite;
        fill: #47c1bf;
	}
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
`
export default function UILoading(props) {
	return (
		<$Loading {...props}>
			<svg viewBox="0 0 44 44">
				<path
					d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"/>
			</svg>
		</$Loading>
	)
}
