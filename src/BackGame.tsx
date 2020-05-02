import * as React from 'react'
import {Subscribe} from "unstated-x";
import {gameContainer} from "./Container";
import styled from 'styled-components'
import UIInput from "./UI/Input";
import UIGrid from "./UI/Grid";

class BackGame extends React.Component<any, any> {

    render() {
        return <Subscribe to={[gameContainer]}>
            {comtainer => {
                return <WrapperBackGame>
                    {(gameContainer.state.data || []).map(cardInfo => {
                        const key = cardInfo.type === "img" ? 'linkImage' : 'label'
                        return <UIGrid>
                            {cardInfo.type}
                            <UIInput value={cardInfo.type === "img" ? cardInfo.linkImage : cardInfo.label}
                                     onChange={event => {
                                         gameContainer.setElement(cardInfo.id, key, event)
                                     }}
                            />
                        </UIGrid>
                    })}
                </WrapperBackGame>
            }}
        </Subscribe>
    }
}

const WrapperBackGame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  width  : 300px;
`
export default BackGame