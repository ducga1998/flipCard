import React from "react";
import {containerQuiz} from "./ContainerQuiz";
import {Subscribe} from "unstated-x";
import styled from 'styled-components'

const Quiz = () => {
    const getArrayRandom = (min, max, total) => {
        const arrRandom = []
        for (let i = 0; i < total; i++) {
            const numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
            arrRandom.push(numRandom)
        }
        return arrRandom
    }
    return <Subscribe to={[containerQuiz]}>
        {() => {
            const testStringArr = 'doan chu test thoi'.split('')
            const arrRandom = getArrayRandom(0, testStringArr.length, 6)
            return <WrapperQuiz>
                {testStringArr.map((char, key) => {
                    if (arrRandom.includes(key)) {
                        return <CharQuiz isHideChar/>
                    }
                    return <CharQuiz>{char}</CharQuiz>
                })}
            </WrapperQuiz>
        }}
    </Subscribe>
}

const WrapperQuiz = styled.div`
  display: flex;
`
const CharQuiz = styled.div`
margin : 5px;
padding : 10px;
background  :${props => props.isHideChar ? 'yellow' : 'indianred'};
border-radius:  2px;
cursor: pointer;
`
export default Quiz