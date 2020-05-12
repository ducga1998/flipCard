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
interface StateQuestion  {
    time : number ;
    type  :'muti' | 'sing'
    id : string
    answers : any []
    title : string
    point : number
    imageLinkDesc : string
}
class KahootContainerQuestion extends Container< StateQuestion > {
    constructor(props) {
        super(props);
        console.log('props ', props)
        if (props.id) {
            this.state = props
        } else {
            this.state = {...props, ...{id: uuid()}}
        }

    }
    setDataQuestion = (key , value , idAnswer) => {
        const {answers}  = this.state
        const  newListAnswer =   answers.map(answers => {
            if(answers.id === idAnswer) {
                return {...answers, ...{[key] : value}}
            }
            return answers
        })
        this.setState({answers : newListAnswer})
    }
}

const DEFAULT_NUMBER_ANSWER = 4
export default KahootContainerQuestion
