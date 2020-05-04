import {Container} from 'unstated-x'
import {v4 as uuid} from 'uuid';

const rawData = {
    data: [

        {type: 'text', index: 0, label: 'A'},

        {
            type: "img",
            index: 7,
            linkImage: 'https://blog.testlodge.com/wp-content/uploads/2015/11/writting_test_cases_in_software_testing_with_sample-815x428.png'
        },

        {type: 'text', index: 8, label: 'G'},
        {type: 'text', index: 2, label: 'C'},
        {

            type: "img",
            index: 0,
            linkImage: 'https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01.png'
        },
        {
            type: "img",
            index: 3,
            linkImage: 'data:image/png;base64,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'
        },
        {type: 'text', index: 3, label: 'D'},
        {
            type: "img",
            index: 4,
            linkImage: 'https://www.cambridgeenglish.org/Images/tye-business-button-2019.jpg'
        },
        {type: 'text', index: 4, label: 'E'},
        {
            type: "img",
            index: 5,
            linkImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJ6oS26i6ta_HSnBMd1NuRIodEwozeOn3VE-B7STyfeYUsDOea&usqp=CAU'
        },
        {
            type: "img",
            index: 2,
            linkImage: 'data:image/png;base64,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'
        },
        {type: 'text', index: 5, label: 'G'},
        {
            type: "img",
            index: 6,
            linkImage: 'https://a.storyblok.com/f/79503/375x708/9f8b40b926/iphone-m.png'
        },

        {type: 'text', index: 1, label: 'B'},

        {type: 'text', index: 7, label: 'F'},
        {
            type: "img",
            index: 8,
            linkImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiO6pxltRbZIYR5-xJDHhfdD6XFjYAc37VIo28Jp22DLV70X0p&usqp=CAU'
        },

        {
            type: "img",
            index: 1,
            linkImage: 'data:image/jpeg;base64,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'
        },
        {type: 'text', index: 6, label: 'E'},
    ],
    count: 0,
    beforeCardIndex: -1,
    color: 'white',
    backgroundDefaultCard: 'defaultCard.png',
flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
}

class BaseContainer extends Container<{ test: string }> {
    constructor(props) {
        super(props);
    }

    setState<K extends keyof any>(state: ((prevState: Readonly<any>) => (Partial<any> | any | null)) | Partial<any> | any | null, callback?: () => void): Promise<void> {

        return super.setState(state, callback);
    }
}

class GameContainer extends Container<{ data: any, count: number, beforeCardIndex: number, afterCardIndex: number }> {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = props
    }

    async getData() {
        rawData.data = rawData.data.map(item => ({...item, ...{fliped: false, id: uuid(), isMatching: false}}))
        return await this.setState(rawData)
    }

    async flipCard({id, index}) {
        const {count, data, beforeCardIndex} = this.state
        console.log("id", id)
        const infoCardChoose = data.map(cardInfo => {
            if (cardInfo.id === id) {
                return {...cardInfo, ...{fliped: !cardInfo.fliped}}
            }
            return cardInfo
        })
        const newCount = count + 1;
        if (newCount === 1) {
            await this.setState({beforeCardIndex: index})
        }
        await this.setState({data: infoCardChoose, count: newCount})
        if (newCount == 2) {
            if (beforeCardIndex === index) {
                this.matchingCard(index)
            }
            setTimeout(() => {
                this.resetCard()
            }, 500)
        }
    }

    matchingCard = index => {
        const {data} = this.state
        const matchingData = data.map(card => {
            if (card.index == index) {
                return ({...card, ...{isMatching: true}})
            }
            return card
        })
        console.log("matchingData", matchingData, index)
        this.setState({data: matchingData, beforeCardIndex: -1})
    }
    resetCard = () => {
        const {data} = this.state
        setTimeout(() => {
            const backData = data.map(card => ({...card, ...{fliped: false}}))
            this.setState({count: 0, data: backData,})
        }, 600)
    }
    newGame = () => {
        const {data} = this.state
        const newGameData = data.map(card => ({...card, ...{isMatching: false, fliped: false}}))
        this.setState({data: newGameData, count: 0})
    }
    setElement = (id, key, value) => {
        const {data} = this.state
        const newData = data.map(card => {
            if (card.id == id) {
                return ({...card, ...{[key]: value}})
            }
            return card
        })
        this.setState({data: newData})
    }
}

export const gameContainer: any = new GameContainer({})
window['game'] = gameContainer
export default GameContainer