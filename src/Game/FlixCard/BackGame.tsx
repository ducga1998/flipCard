import * as React from "react";
import {Subscribe} from "unstated-x";
import {gameContainer} from "Store/Container";
import styled from "styled-components";
import UIInput from "UI/Input";
import UIGrid from "UI/Grid";
import UIGroup from "UI/Group";
import UIToggle from "UI/Button/Toggle";
import UILabel from "UI/Label";
import UISwitch from "UI/Switch";

class BackGame extends React.Component<any, any> {
  render() {
    return (
        <Subscribe to={[gameContainer]}>
          {(container) => {
            const {
              color,
              flipDirection,
              flipSpeedFrontToBack,
            flipSpeedBackToFront,
            infinite,
          } = container.state;
          return (
            <>
              {" "}
              <WrapperBackGame>
                {(gameContainer.state.data || []).map((cardInfo) => {
                  const key = cardInfo.type === "img" ? "linkImage" : "label";
                  return (
                    <UIGrid>
                      <UILabel>
                        {cardInfo.type}({cardInfo.index})
                      </UILabel>
                      <UIInput
                        value={
                          cardInfo.type === "img"
                            ? cardInfo.linkImage
                            : cardInfo.label
                        }
                        onChange={(event) => {
                          gameContainer.setElement(cardInfo.id, key, event);
                        }}
                      />
                    </UIGrid>
                  );
                })}
                 <UIGrid>
                <UILabel>Flip Direction</UILabel>
                <UIGroup.Button>
                  <UIToggle
                    onChange={() =>
                      gameContainer.setState({ flipDirection: "horizontal" })
                    }
                    value={flipDirection}
                    on="horizontal"
                    off=""
                  >
                    Horizontal
                  </UIToggle>
                  <UIToggle
                    onChange={() =>
                      gameContainer.setState({ flipDirection: "verizontal" })
                    }
                    value={flipDirection}
                    on="verizontal"
                    off=""
                  >
                    Verizontal
                  </UIToggle>
                </UIGroup.Button>
              </UIGrid>
              <UIGrid>
                <UILabel>Flip Speed Front To Back</UILabel>
                <UIInput
                  min={0.5}
                  type="number"
                  value={flipSpeedFrontToBack}
                  onChange={(flipSpeedFrontToBack) =>
                    gameContainer.setState({ flipSpeedFrontToBack })
                  }
                />
              </UIGrid>
              <UIGrid>
                <UILabel>Flip Speed Back To Front</UILabel>

                <UIInput
                  min={0.5}
                  type="number"
                  value={flipSpeedBackToFront}
                  onChange={(flipSpeedBackToFront) =>
                    gameContainer.setState({ flipSpeedBackToFront })
                  }
                />
              </UIGrid>
              <UIGrid>
                <UILabel>Infinite </UILabel>
                <UISwitch
                  onChange={(infinite) => gameContainer.setState({ infinite })}
                  value={infinite}
                  on={infinite}
                />
              </UIGrid>
              </WrapperBackGame>

            </>
          );
        }}
      </Subscribe>
    );
  }
}

const WrapperBackGame = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  width: 700px;
`;
export default BackGame;
