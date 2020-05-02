import * as React from 'react';
import {useEffect, useState} from 'react';
import {ImageCard} from './Card';
import styled from 'styled-components'

interface CardFlipState {
    cardStyles: any
    cardZIndex: string,
    containerStyle: any,
    flipDirection: string,
    flipSpeedBackToFront: number,
    flipSpeedFrontToBack: number,
    infinite: boolean
    isFlipped: boolean
    children: any
    handleEvent: (e ?: any) => any
    type: 'img' | 'text'
    linkImage?: string
    label?: string
    index?: number
    isMatching?: boolean
}

const ReactCardFlip: React.FC<any> = (props: CardFlipState) => {
    const {
        cardStyles: {
            back,
            front,
        },
        cardZIndex,
        containerStyle,
        flipDirection,
        flipSpeedFrontToBack,
        flipSpeedBackToFront,
        infinite,
        isMatching
    } = props;

    const [isFlipped, setFlipped] = useState(props.isFlipped);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        console.log("props", props)
        if (props.isFlipped !== isFlipped) {
            setFlipped(props.isFlipped);
            setRotation((c) => c + 180);
        }
    }, [props.isFlipped]);


    const frontRotateY = `rotateY(${
        infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateY = `rotateY(${
        infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;
    const frontRotateX = `rotateX(${
        infinite ? rotation : isFlipped ? 180 : 0
    }deg)`;
    const backRotateX = `rotateX(${
        infinite ? rotation + 180 : isFlipped ? 0 : -180
    }deg)`;

    const styles: any = {
        back: {
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'relative' : 'absolute',
            top: '0',
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedFrontToBack}s`,
            width: '100%',
            ...back,
        },
        container: {
            perspective: '1000px',
            zIndex: `${cardZIndex}`,
            // width: '60px',
            // height: '30px'
        },
        flipper: {
            height: '100%',
            position: 'relative',
            width: '100%',
        },
        front: {
            backfaceVisibility: 'hidden',
            height: '100%',
            left: '0',
            position: isFlipped ? 'absolute' : 'relative',
            top: '0',
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedBackToFront}s`,
            width: '100%',
            zIndex: '2',
            ...front,
        },
    };
    return (
        <WrapperCard
            isMatching={isMatching}
            style={{...styles.container, ...containerStyle}}
        >
            <div style={styles.flipper}>
                <div style={styles.front}>
                    <ImageCard style={styles.card} onClick={props.handleEvent}>
                        <img
                            src="defaultCard.png"
                        />
                    </ImageCard>
                </div>

                <div style={styles.back}>
                    <ImageCard style={styles.card} onClick={props.handleEvent}>
                        {props.type === "img" ? <Image srcData={props.linkImage}/> : <div>{props.label}</div>}
                    </ImageCard>
                </div>
            </div>
        </WrapperCard>
    );
};
const Image = styled.div`
    background : url(${props => props.srcData ? props.srcData : '.defaultPlaceHolder.png'} );\
    width: 60px;
    height: 60px;
    background-size: cover;
    pointer-events: none;
`
const WrapperCard = styled.div`

 background: ${props => props.isMatching ? '#b8efcb' : ''};
`
ReactCardFlip.defaultProps = {
    cardStyles: {
        back: {},
        front: {},
    },
    cardZIndex: 'auto',
    containerStyle: {},
    flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false,
};

export default ReactCardFlip;