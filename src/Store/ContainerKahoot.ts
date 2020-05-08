import {Container} from 'unstated-x'
import {v4 as uuid} from 'uuid';

interface KahootState {
    // selected: any
    // numberOfCrosswords: number,
    // initArrayGame: any,
    // arrRandom: any,
    // countCharRandom: number,
    // arrayCrosswords: any[]
    // initString: string
    // countWrong: number
}

class KahootContainer extends Container<{ questions: any[] }> {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = props
    }

    createQuestion = () => {
        const idQuestion = uuid()

    }


}

export const containerKahoot: any = new KahootContainer({
    countCharRandom: 6,
    numberOfCrosswords: 8,
    initString: '',
    countWrong: 0
})
window['kahoot'] = containerKahoot
export default KahootContainer