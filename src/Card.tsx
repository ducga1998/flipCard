import React, {Component} from 'react';

import ReactCardFlip from './flixCard';
import styled from 'styled-components'
import {gameContainer} from "./Container";

const styles = {
    card: {
        width: '60px',
    },
    image: {
        // height: '30px',
        width: '60px'
    }
};

interface CardProps {
    type: 'text' | 'img'
    linkImage?: string
    label: string
    index?: number
    fliped?: boolean
    id: string
}

class Card extends Component<CardProps, any> {
    state = {
        isFlipped: false,
        count: 0
    }
    handleClick = (event) => {
        gameContainer.flipCard(this.props.id)
        // this.setState(prevState => ({isFlipped: !prevState.isFlipped , count : prevState.count ++ }));
    }

    componentDidMount(): void {
        console.log("this.props", this.props)
    }

    componentDidUpdate(prevProps: Readonly<CardProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (this.state.count == 2) {

        }
    }

    render() {
        const {type, linkImage, label, fliped} = this.props
        return (
            <ReactCardFlip isFlipped={fliped} handleEvent={this.handleClick} {...this.props} />

        );
    }
}

export const ImageCard = styled.div`
 cursor: pointer;
 border: 1px solid #eeeeee;
 border-radius: 3px;
 padding: 15px;
 img {
  width: 60px;
 }
`
export default Card;

//define props  : text and image  =>
// type card
/*
*type card
*
*
* */
