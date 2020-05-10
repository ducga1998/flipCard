import React from "react";
import {Subscribe} from "unstated-x";
import KahootContainerQuestion from "Store/ContainerKahoot";
import ContentEditable from 'UI/ContentEditTable'
import UISelect from "UI/Select";
import UIGrid from "UI/Grid";
import UILayout from 'UI/Layout'
import UIInput from "UI/Input";
import UILabel from "UI/Label";
import UIButton from 'UI/Button'
import {ICONS} from "UI/Icon";
import ContainerLevel from "../../Store/ContainerLevel";
import {UIPane} from "../../demo/sortable";
import SortableList from "UI/List/SortableList";
import UIList from "UI/List";
import {v4 as uuid} from "uuid";
import ModelPreview from "./ModelPreview";
import {IN_ORDER_COLOR, IN_ORDER_ICON} from "../../util";
import {ItemLevel, WrapperAnswer, WrapperContent, WrapperCreateQuestion, WrapperKahoot, WrapperLevel} from './styled';


const levelContainer = new ContainerLevel({
    levels: [],
    selectLevel: null
})
window['levelContainer'] = levelContainer
const Index = () => {
    const [openGame, setOpenGame] = React.useState(false)
    const [isPreview , setPreview] = React.useState(false)
    const handleOpenGame = async () => {
        const containerQuestion: any = new KahootContainerQuestion({
            answers: Array(4).fill({value: '', wrong: false})
                .map(item => ({...item, ...{id: uuid()}})),
            time: 20,
            point: 1000,
            imageLinkDesc: 'https://miro.medium.com/proxy/1*HSisLuifMO6KbLfPOKtLow.jpeg'
        })
        await levelContainer.createLevel(containerQuestion)
        await levelContainer.selectLevel(containerQuestion)
        await setOpenGame(true)
    }
    const handleAddLevel = async  () => {
        const containerQuestion: any = new KahootContainerQuestion({
            answers: Array(4).fill({value: '', wrong: false})
                .map(item => ({...item, ...{id: uuid()}})),
            time: 20,
            point: 1000,
            imageLinkDesc: '',
        })
        await levelContainer.createLevel(containerQuestion)
    }
    if (!openGame) {
        return <UILayout.Pane>
            <UIButton onClick={handleOpenGame}>
                CreateGame
            </UIButton>
        </UILayout.Pane>
    }
    return <Subscribe to={[levelContainer]}>
        {
            () => {
                const {levels, levelSelect} = levelContainer.state
                return <WrapperKahoot>
                    <ModelPreview isOpen={isPreview} setOpen={setPreview} selectContainer={levelSelect} />
                    <WrapperLevel style={{width: 300}}>
                        <UIPane>
                            <SortableList
                                items={levels}
                                wrapper={UIList.Group}
                                wrapperProps={{relaxed: true, padded: true}}
                                dragHandlerSelector={".drag"}
                                onChange={levels => {
                                        levelContainer.setState({levels})
                                }}
                                options={{delay: 100}}
                                render={(items) => items.map(container => {
                                    console.log("levelSelect.state.id",levelSelect)
                                    const {imageLinkDesc, id} = container.state
                                    return <UIList.Item active={levelSelect ? levelSelect.state.id === id : false} className="drag" key={id} interactive bordered>
                                        <ItemLevel  onClick={() => {
                                            levelContainer.selectLevel(container)
                                        }}>
                                            <img src={imageLinkDesc && imageLinkDesc.length >0 ? imageLinkDesc : 'defaultImageLevel.jpg' }/>
                                        </ItemLevel>
                                    </UIList.Item>
                                })}
                            />

                        </UIPane>
                        <UIButton onClick={ handleAddLevel}>Add Item</UIButton>
                    </WrapperLevel>
                    <WrapperCreateQuestion>
                      <UILayout.Pane>
                          <UILayout.Content style={{textAlign: 'end'}}>
                              <UIButton onClick={() => setPreview(true)} >Preview</UIButton>
                              <UIButton>Done</UIButton>
                          </UILayout.Content>
                          {levelSelect && <Subscribe to={[levelSelect]}>
                              {
                                  () => {
                                      const {title, answers, imageLinkDesc, time, point} = levelSelect.state
                                      console.log("answers",answers)
                                      return <>
                                          <UILayout.Pane>
                                              {/*<WrapperContent style={{width : '100%', background : 'white' }}>*/}
                                              <ContentEditable
                                                  style={{flex: 1}}
                                                  onKeyPress={e => {
                                                  }}
                                                  onChange={(event, value) => levelSelect.setState({title, value})}
                                                  html={title}
                                                  color="black"
                                              />
                                              {/*</WrapperContent>*/}
                                          </UILayout.Pane>


                                          <div style={{display: 'flex', margin: '10px'}}>
                                              <UILayout.Pane style={{width: 400}}>
                                                  <UIGrid>
                                                      <UILabel>Time:</UILabel>
                                                      <UISelect value={time}
                                                                options={[5, 10, 20, 30, 60, 90, 120, 240].map(item => ({
                                                                    value: item,
                                                                    label: item
                                                                }))}
                                                                onChange={value => levelSelect.setState({time: value})}/>
                                                  </UIGrid>
                                                  <UIGrid>
                                                      <UILabel>Point:</UILabel>
                                                      <UISelect value={point}
                                                                options={[{value: 500, label: 500}, {
                                                                    value: 1000,
                                                                    label: 1000
                                                                }, {
                                                                    value: 2000,
                                                                    label: 2000
                                                                }]}
                                                                onChange={value => levelSelect.setState({point: value})}/>
                                                  </UIGrid>
                                                  <UIGrid>
                                                      Image :
                                                      <UIInput value={imageLinkDesc}
                                                               onChange={value => levelSelect.setState({imageLinkDesc: value})}
                                                      />
                                                  </UIGrid>
                                              </UILayout.Pane>
                                              <UILayout.Pane style={{width: 400}}>
                                                  {imageLinkDesc && imageLinkDesc.length &&
                                                  <img style={{pointerEvents: 'none'}} width={300} src={imageLinkDesc}/>}
                                              </UILayout.Pane>
                                          </div>
                                          <WrapperAnswer>
                                              {answers.map((answer, key) => {
                                                  return <WrapperContent backgroundColor={IN_ORDER_COLOR[key]}>
                                                      <svg fill="white" width={32} height={32}
                                                           viewBox="0 0 32 32"> {ICONS[IN_ORDER_ICON[key]]}</svg>
                                                      <ContentEditable
                                                          style={{flex: 10}}
                                                          onKeyPress={e => {
                                                          }}

                                                          onChange={(event, value) => levelSelect
                                                              .setDataQuestion('value', value, answer.id)}
                                                          html={answer.value}

                                                      />
                                                  </WrapperContent>

                                              })}
                                          </WrapperAnswer>
                                      </>
                                  }
                              }
                          </Subscribe>
                          }
                      </UILayout.Pane>

                    </WrapperCreateQuestion>
                </WrapperKahoot>
            }
        }
    </Subscribe>


}


export default Index