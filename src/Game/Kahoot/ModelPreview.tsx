import React, {useEffect, useRef} from 'react';
import UIModal from "../../UI/Modal";
import {Subscribe} from "unstated-x";
import {ImageBackground, SpanText, WrapperAnswer, WrapperContent} from "./styled";
import {IN_ORDER_COLOR, IN_ORDER_ICON} from "../../util";
import {ICONS} from "../../UI/Icon";
import UILayout from "../../UI/Layout";
import styled from 'styled-components'

// import set = Reflect.set;

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    // @ts-ignore
    useEffect(() => {
        function tick() {
            // @ts-ignore
            return savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const ModelPreview = ({isOpen, setOpen, selectContainer}) => {
    const [nowTime, setTime] = React.useState(0)
    const [speedCount, setSpeedCount] = React.useState(1000)

    useInterval(() => {
        // Your custom logic here
        if (isOpen) {
            if (nowTime - 1 === 0) {
                setSpeedCount(null)
            }
            setTime(nowTime - 1);
        }

    }, speedCount);
    React.useEffect(() => {
        setTime(selectContainer.state.time)
        return () => {
            setTime(selectContainer.state.time)
            setSpeedCount(1000)
        }
    }, [isOpen])
    return <Subscribe to={[selectContainer]}>
        {() => {
            const {answers, title, imageLinkDesc} = selectContainer.state
            return <UIModal
                open={isOpen}
                title="Preview"
                onClose={() => setOpen(false)}
                size="large"

                onDismiss={() => setOpen(false)}>
                <WrapperContent style={{width: '100%'}}>
                    <SpanText style={{color: 'black'}}>{title}</SpanText>
                </WrapperContent>
                <div style={{
                    display: 'flex', margin: '10px', alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    {nowTime ? <TimeBox>
                        {nowTime}
                    </TimeBox> : null}
                    <UILayout.Pane style={{width: 400, height: 200, flex: 1}}>

                    {imageLinkDesc && imageLinkDesc.length &&
                        <ImageBackground backgroundSrc={imageLinkDesc}/>}
                    </UILayout.Pane>
                </div>
                <WrapperAnswer>{answers.map((answer, key) => {
                    return <WrapperContent backgroundColor={IN_ORDER_COLOR[key]}>

                        <svg fill="white" width={32} height={32}
                             viewBox="0 0 32 32"> {ICONS[IN_ORDER_ICON[key]]}</svg>
                        <SpanText active={answer.wrong && !speedCount}
                                  dangerouslySetInnerHTML={{__html: answer.value}}/>
                    </WrapperContent>

                })}
                </WrapperAnswer>
            </UIModal>
        }}
    </Subscribe>

}
const TimeBox = styled.div`
    display: flex;
    flex-direction: row;
   
    align-items: center;
    margin : 10px;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
    font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 1.6rem;
    color: rgb(255, 255, 255);
    flex: 0 1 auto;
    background: rgb(134, 76, 191);
    border-radius: 100%;
`
const ContentDiv = styled.div`
padding: 50px;

//position: absolute;
${props => props.active ? `
    width: 100%;
    background: #25252538;`
    : ''}
`
export default ModelPreview