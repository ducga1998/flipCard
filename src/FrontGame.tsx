import * as React from 'react'
import Card from "./Card";
import {Subscribe} from "unstated-x";
import {gameContainer} from "./Container";
import styled from 'styled-components'

class FrontGame extends React.Component<any, any> {

    render() {
        return <Subscribe to={[gameContainer]}>
            {
                () => {
                    return <WrapperFrontGame>
                        {gameContainer.state.data.map(item => {
                            return <Card/>
                        })}
                    </WrapperFrontGame>
                }}

        </Subscribe>
    }
}

const WrapperFrontGame = styled.div`
      display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
`
export default FrontGame