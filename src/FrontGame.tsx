import * as React from 'react'
import Card from "./Card";
import {Subscribe} from "unstated-x";
import {gameContainer} from "./Container";
import styled from 'styled-components'

class FrontGame extends React.Component<any, any> {
    async componentDidMount() {
        // await gameContainer.getData()
    }

    render() {
        return <div>
            <Subscribe to={[gameContainer]}>
                {

                    container => {
                        if (!container.state.data) {
                            return 'loading ...'
                        }
                        return <WrapperFrontGame>
                            {container.state.data.map(item => {
                                return <Card    {...item}/>
                            })}

                        </WrapperFrontGame>

                    }}

            </Subscribe>
            }
            <button onClick={() => gameContainer.newGame()}>new game</button>
        </div>
    }
}

const WrapperFrontGame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  width  : 300px;
`
export default FrontGame