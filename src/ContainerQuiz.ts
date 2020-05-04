import {Container} from 'unstated-x'
import {getArrayRandom, makeArrStringRanDom, shuffleElementInArray} from "./util";
import {v4 as uuid} from 'uuid';

interface QuizState {
    selected: any
    numberOfCrosswords: number,
    initArrayGame: any,
    arrRandom: any,
    countCharRandom: number,
    arrayCrosswords: any[]
    initString: string
    countWrong: number
}

class QuizContainer extends Container<QuizState> {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = props
    }

    async generateGame() {
        const {countCharRandom, numberOfCrosswords, initString} = this.state
        console.log("initString", initString)
        if (initString.length < countCharRandom) {
            return alert("so luong chu choi phai lon hon so luong nham lan !")
        }
        const initArrayGame = (initString).split('').map(char => ({char, id: uuid()}))
        const arrRandom = getArrayRandom(initArrayGame, initArrayGame.length, countCharRandom)
        console.log("arrRandom", arrRandom)
        const arrayCrosswords = shuffleElementInArray(makeArrStringRanDom(numberOfCrosswords, arrRandom.map(item => item.char)))
        await this.setState({arrRandom, initArrayGame, arrayCrosswords})
    }

    async checkMatchingChar(char) {
        let {selected, initArrayGame, countWrong, arrRandom} = this.state
        console.log("selected", selected)
        if (selected) {
            console.log(selected, char)
            if (selected.char === char) {
                const newData = initArrayGame.map(item => {
                    if (item.char === char) {
                        console.log('item vao day roi', item, char)
                        return ({...item, ...{matching: true}})
                    }

                    return item
                })
                if ((countWrong + 1) === arrRandom.length) {
                    alert("win game : ))")
                }
                await this.setState({initArrayGame: newData, countWrong: countWrong + 1})
            } else {
                alert('sai roi nha em : )))')
            }

        }
    }


}

export const containerQuiz: any = new QuizContainer({
    countCharRandom: 6,
    numberOfCrosswords: 8,
    initString: '',
    countWrong: 0
})
window['quiz'] = containerQuiz
export default QuizContainer