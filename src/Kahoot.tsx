import React from "react";
import styled from 'styled-components'
import {Subscribe} from "unstated-x";
import {containerKahoot} from "Store/ContainerKahoot";
import UIInput from "UI/Input";

const Kahoot = () => {

    return <Subscribe to={[containerKahoot]}>
        {
            container => {
                const {answer} = container.state
                return <div>
                    <UIInput/>
                    {/*{containe}*/}
                </div>
            }
        }
    </Subscribe>

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
export default Kahoot