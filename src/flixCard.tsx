import * as React from 'react';
import {useEffect, useState} from 'react';
import {ImageCard} from './Card';

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

    // const getComponent = (key: 0 | 1) => {
    //     if (props.children.length !== 2) {
    //         throw new Error(
    //             'Component ReactCardFlip requires 2 children to function',
    //         );
    //     }
    //     console.log("props.children",props.children)
    //     return props.children[key];
    // };

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
            WebkitBackfaceVisibility: 'hidden',
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
            width: '60px',
            // height: '30px'
        },
        flipper: {
            height: '100%',
            position: 'relative',
            width: '100%',
        },
        front: {
            WebkitBackfaceVisibility: 'hidden',
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
    console.log("props.type  === ", props, props.type === "img", props.label)
    return (
        <div
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
                        {props.type === "img" ? <img src={props.linkImage}/> : <label>{props.label}</label>}
                    </ImageCard>
                </div>
            </div>
        </div>
    );
};

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