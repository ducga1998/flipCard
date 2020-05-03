import * as React from 'react'
import Card from "./Card";
import {Subscribe, SubscribeOne} from "unstated-x";
import {gameContainer} from "./Container";
import styled from 'styled-components'
import UIButton from "./UI/Button";

class FrontGame extends React.Component<any, any> {
    render() {
        return <div>
            <Subscribe to={[gameContainer]}>
                {

                    container => {
                        const {color} = gameContainer.state
                        if (!container.state.data) {
                            return 'loading ...'
                        }
                        return <WrapperFrontGame color={color}>
                            {container.state.data.map(item => {
                                return <Card    {...item}/>
                            })}

                        </WrapperFrontGame>

                    }}

            </Subscribe>

            <SubscribeOne to={gameContainer} bind={['color']}>
                {
                    () => {
                        return <>
                            <WrapperColor>{['red', 'green', 'blue', 'black', 'white'].map(item => <ButtonCir
                                onClick={() => gameContainer.setState({color: item})}
                                color={item}
                                active={item === gameContainer.state.color}/>)}</WrapperColor>
                            <UIButton onClick={() => gameContainer.newGame()}>new game</UIButton>
                        </>
                    }
                }
            </SubscribeOne>

        </div>
    }
}

const WrapperColor = styled.div`
display: flex;
padding : 10px;
background: #999999;
`
const ButtonCir = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
border: 3px solid ${props => props.active ? 'black' : 'white'};
background: ${props => props.color ? props.color : ''};
cursor: pointer;
`
const WrapperFrontGame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  width  : 300px;
  background: ${props => props.color ? props.color : ''};
`
export default FrontGame