import React, {Component} from 'react';

import ReactCardFlip from './flixCard';

const styles = {
    card: {
        border: '1px solid #eeeeee',
        borderRadius: '3px',
        padding: '15px',
        width: '30px'
    },
    image: {
        height: '30px',
        width: '30px',
    }
};

class Card extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
    }

    componentDidMount(): void {
        // window['duc'] =  this
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div style={styles.card}>
                    <img
                        onClick={this.handleClick}
                        style={styles.image}
                        src="//static.pexels.com/photos/59523/pexels-photo-59523.jpeg"
                    />
                </div>
                <div style={styles.card}>
                    <img

                        onClick={this.handleClick}
                        style={styles.image}
                        src="//img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/4/16/enhanced-11136-1396643149-13.jpg?no-auto"
                    />

                </div>
            </ReactCardFlip>
        );
    }
}

export default Card;

//define props  : text and image  =>
// type card
/*
*type card
*
*
* */
