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
import UICheckBox from 'UI/Checkbox'
import {v4 as uuid} from "uuid";
import ModelPreview from "./ModelPreview";
import {IN_ORDER_COLOR, IN_ORDER_ICON} from "../../util";
import {
    ImageBackground,
    ItemLevel,
    PlaceHolder,
    WrapperAnswer,
    WrapperCheckBox,
    WrapperContent,
    WrapperCreateQuestion,
    WrapperKahoot,
    WrapperLevel
} from './styled';
import confirm from "../../UI/Confirm";


const levelContainer = new ContainerLevel({
    levels: [],
    selectLevel: null
})
window['levelContainer'] = levelContainer
const Index = () => {
    const [openGame, setOpenGame] = React.useState(false)
    const [isPreview, setPreview] = React.useState(false)
    const [idAnswerFocus, setId] = React.useState('')
    const handleOpenGame = async () => {
        // const containerQuestion: any = new KahootContainerQuestion({
        //     answers: Array(4).fill({value: '', wrong: false})
        //         .map(item => ({...item, ...{id: uuid()}})),
        //     time: 20,
        //     point: 1000,
        //     title: 'asca',
        //     imageLinkDesc: 'https://miro.medium.com/proxy/1*HSisLuifMO6KbLfPOKtLow.jpeg'
        // })
        // const containerQuestion2: any = new KahootContainerQuestion({
        //     answers: Array(4).fill({value: '', wrong: false})
        //         .map(item => ({...item, ...{id: uuid()}})),
        //     time: 20,
        //     point: 1000,
        //     title: 'asca',
        //     imageLinkDesc: 'https://miro.medium.com/proxy/1*HSisLuifMO6KbLfPOKtLow.jpeg'
        // })
        // const containerQuestion3: any = new KahootContainerQuestion({
        //     answers: Array(4).fill({value: '', wrong: false})
        //         .map(item => ({...item, ...{id: uuid()}})),
        //     time: 20,
        //     point: 1000,
        //     title: 'asca',
        //     imageLinkDesc: 'https://miro.medium.com/proxy/1*HSisLuifMO6KbLfPOKtLow.jpeg'
        // })
        // const containerQuestion4: any = new KahootContainerQuestion({
        //     answers: Array(4).fill({value: 'ccas', wrong: false})
        //         .map(item => ({...item, ...{id: uuid()}})),
        //     time: 20,
        //     title: 'asca',
        //     point: 1000,
        //     imageLinkDesc: 'https://miro.medium.com/proxy/1*HSisLuifMO6KbLfPOKtLow.jpeg'
        // })
        // await levelContainer.createLevel(containerQuestion)
        // await levelContainer.createLevel(containerQuestion2)
        // await levelContainer.createLevel(containerQuestion3)
        // await levelContainer.createLevel(containerQuestion4)
        //
        levelContainer.importData()
        // await levelContainer.selectLevel(containerQuestion)
        await setOpenGame(true)
    }
    const handleAddLevel = async () => {
        const containerQuestion: any = new KahootContainerQuestion({
            answers: Array(4).fill({value: '', wrong: false})
                .map(item => ({...item, ...{id: uuid()}})),
            time: 20,
            point: 1000,
            title: '',
            imageLinkDesc: '',
        })
        await levelContainer.createLevel(containerQuestion)
    }
    const checkPreview = (container) => {
        const {imageLinkDesc, answers,} = container.state
        return imageLinkDesc.length > 0 && answers.filter(answer => answer.wrong && answer.value.length > 0).length > 0
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
                    <WrapperLevel style={{width: 300}}>
                        <UIPane style={{height: '38rem'}}>
                            <SortableList
                                items={levels}
                                wrapper={UIList.Group}
                                wrapperProps={{relaxed: true, padded: true}}
                                dragHandlerSelector={".drag"}
                                onChange={levels => {
                                    levelContainer.setState({levels})
                                }}
                                options={{delay: 100}}
                                render={(items) => items.map((container, key) => {
                                    console.log("levelSelect.state.id", levelSelect)

                                    return <Subscribe to={[container]}>
                                        {
                                            () => {
                                                const {imageLinkDesc, id, answers} = container.state
                                                return <div style={{display: 'flex', flexDirection: 'row'}}>
                                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                                        <UIButton onClick={() => {
                                                            levelContainer.duplicateLevel(key)
                                                        }} iconBefore="ungroup" compact/>
                                                        <UIButton onClick={() => {
                                                            confirm({
                                                                content: "Xác nhận xoá ?", onConfirm: () => {
                                                                    levelContainer.deleteLevel(id)
                                                                }
                                                            })

                                                        }} iconBefore="bin" compact/>
                                                    </div>
                                                    <UIList.Item
                                                        active={levelSelect ? levelSelect.state.id === id : false}
                                                        className="drag" key={id} interactive bordered>
                                                        <ItemLevel onClick={() => {
                                                            levelContainer.selectLevel(container)
                                                        }}>

                                                            <ImageBackground style={{height: 100}}
                                                                             backgroundSrc={imageLinkDesc && imageLinkDesc.length > 0 ? imageLinkDesc : 'defaultImageLevel.jpg'}/>
                                                            <div style={{
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                marginTop: 5
                                                            }}>
                                                                {answers.map((answer, key) => {
                                                                    return <PlaceHolder active={answer.wrong}
                                                                                        borderColor={IN_ORDER_COLOR[key]}/>
                                                                })}
                                                            </div>
                                                        </ItemLevel>
                                                    </UIList.Item>
                                                </div>
                                            }
                                        }
                                    </Subscribe>
                                })}
                            />
                        </UIPane>
                        <UIButton style={{}} onClick={handleAddLevel}>Add Item</UIButton>
                    </WrapperLevel>
                    <WrapperCreateQuestion>

                        {levelSelect && <Subscribe to={[levelSelect]}>
                            {
                                () => {
                                    const {title, answers, imageLinkDesc, time, point} = levelSelect.state
                                    console.log("answers", answers)
                                    return <>
                                        <UILayout.Content style={{textAlign: 'end', background: 'transparent'}}>
                                            <ModelPreview isOpen={isPreview} setOpen={setPreview}
                                                          selectContainer={levelSelect}/>
                                            {checkPreview(levelSelect) &&
                                            <UIButton onClick={() => setPreview(true)}>Preview</UIButton>}
                                            <UIButton onClick={() => {
                                                levelContainer.saveData()
                                            }}>Save</UIButton>
                                        </UILayout.Content>
                                        <WrapperContent style={{width: '100%', background: 'white'}}>
                                            <ContentEditable
                                                placeholder="Click to start typing your question"
                                                idAnswerFocus={idAnswerFocus}
                                                idAnswer={'title'}
                                                style={{flex: 1, color: "black"}}
                                                onChange={(event, value) => levelSelect.setState({title: value})}
                                                value={title}
                                                onFocus={() => {
                                                    setId('title')
                                                }}

                                            />
                                        </WrapperContent>
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
                                                <ImageBackground backgroundSrc={imageLinkDesc}/>}
                                            </UILayout.Pane>
                                        </div>
                                        <WrapperAnswer>


                                            {answers.map((answer, key) => {
                                                return <WrapperContent backgroundColor={IN_ORDER_COLOR[key]}>
                                                    <svg fill="white" width={32} height={32}
                                                         viewBox="0 0 32 32"> {ICONS[IN_ORDER_ICON[key]]}</svg>
                                                    <ContentEditable
                                                        idAnswerFocus={idAnswerFocus}
                                                        idAnswer={answer.id}
                                                        onFocus={() => {
                                                            setId(answer.id)
                                                        }}
                                                        style={{flex: 10}}
                                                        onChange={(event, value) => levelSelect
                                                            .setDataQuestion('value', value, answer.id)}
                                                        value={answer.value}

                                                    />
                                                    <WrapperCheckBox>
                                                        <UICheckBox
                                                            value={answer.wrong} onChange={() => {
                                                            levelSelect.setDataQuestion('wrong', !answer.wrong, answer.id)
                                                        }}/>
                                                    </WrapperCheckBox>
                                                </WrapperContent>

                                            })}
                                        </WrapperAnswer>
                                    </>
                                }
                            }
                        </Subscribe>
                        }
                        {/*< />*/}
                    </WrapperCreateQuestion>
                </WrapperKahoot>
            }
        }
    </Subscribe>


}


export default Index