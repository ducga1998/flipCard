import React from "react";
import {containerQuiz} from "Store/ContainerQuiz";
import {Subscribe} from "unstated-x";
import styled from 'styled-components'
import UIGroup from "UI/Group";
import UIInput from "UI/Input";
import UIButton from "UI/Button";

const Quiz = () => {
    const [value, setValue] = React.useState('')
    React.useEffect(() => {
        // containerQuiz.generateGame('doan chu test thoi')
    }, [])

    return <Subscribe to={[containerQuiz]}>
        {() => {

            const {arrRandom, initArrayGame, arrayCrosswords, selected, initString} = containerQuiz.state


            if (initString.length === 0) {
                return <UIGroup.Input style={{width: 300}}>
                    <UIInput onChange={value => setValue(value)} value={value}/>
                    <UIButton onClick={async () => {
                        await containerQuiz.setState({initString: value})
                        await containerQuiz.generateGame()
                    }}>Chơi</UIButton>
                </UIGroup.Input>
            }
            if (!initArrayGame && !arrRandom) return 'loading...'
            return <>
                <WrapperQuiz>
                    {initArrayGame.map(({id, char, matching}) => {
                        if (arrRandom.find(item => item.id === id)) {
                            console.log('log dung 6 lan', id)
                            return <CharQuiz data-id={id} selected={selected && id === selected.id} isHideChar
                                             onClick={() => {
                                                 containerQuiz.setState({selected: ({id, char})})
                                             }
                                             }>{matching ? char : ''}</CharQuiz>
                        }
                        return <CharQuiz>{char}</CharQuiz>
                    })}

                </WrapperQuiz>

                {selected && <WrapperBottom>
                    {arrayCrosswords.map(item =>
                        <CharQuiz onClick={() => containerQuiz.checkMatchingChar(item)}>{item}</CharQuiz>)
                    }
                </WrapperBottom>}
            </>
        }}
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
export default Quiz