import React from "react";
import styled from 'styled-components'
import {Subscribe} from "unstated-x";
// import {containerKahootQuestion} from "Store/ContainerKahoot";

const BackKahoot = () => {

    return null

}
const WrapperBottom = styled.div`
display: flex;
padding : 10px;
background: #999999;

`
const WrapperQuiz = styled.div`
  display: flex;
`
const CharQuiz = styled.div`
margin : 5px;
padding : 10px;
background  :${props => props.isHideChar ? 'yellow' : 'indianred'};
border-radius:  2px;
cursor: pointer;
border : ${props => props.selected ? '2px solid #007eff ' : '2px solid black'}
`
export default BackKahoot