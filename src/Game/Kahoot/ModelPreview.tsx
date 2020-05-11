import React, {useEffect, useRef} from 'react';
import UIModal from "../../UI/Modal";
import {Subscribe} from "unstated-x";
import {ImageBackground, WrapperAnswer, WrapperContent} from "./styled";
import {IN_ORDER_COLOR, IN_ORDER_ICON} from "../../util";
import {ICONS} from "../../UI/Icon";
import UILayout from "../../UI/Layout";
import styled from 'styled-components'

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
    const [nowTime, setTime] = React.useState(selectContainer.state.time)
    useInterval(() => {
        // Your custom logic here
        setTime(nowTime - 1);
    }, 1000);

    console.log("selectContainer", selectContainer)
    return <Subscribe to={[selectContainer]}>
        {() => {
            const {answers, title, imageLinkDesc} = selectContainer.state
            return <UIModal
                open={isOpen}
                title="Modal 1"
                onClose={() => setOpen(false)}
                size="large"

                onDismiss={() => setOpen(false)}>
                <UILayout.Pane>
                    {/*<WrapperContent style={{width : '100%', background : 'white' }}>*/}
                    <ContentDiv><h1>{title}</h1></ContentDiv>
                </UILayout.Pane>
                <div style={{display: 'flex', margin: '10px'}}>

                    <TimeBox>
                        {nowTime}
                    </TimeBox>
                    <UILayout.Pane style={{width: 400}}>
                        {imageLinkDesc && imageLinkDesc.length &&
                        <ImageBackground backgroundSrc={imageLinkDesc}/>}
                    </UILayout.Pane>
                </div>
                <WrapperAnswer>{answers.map((answer, key) => {
                    return <WrapperContent backgroundColor={IN_ORDER_COLOR[key]}>
                        <svg fill="white" width={32} height={32}
                             viewBox="0 0 32 32"> {ICONS[IN_ORDER_ICON[key]]}</svg>
                        <ContentDiv>{answer.value}</ContentDiv>
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
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
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
`
export default ModelPreview