import {Container} from 'unstated-x'

class QuizContainer extends Container<any> {
    constructor(props) {
        super(props);
        console.log('props ', props)
        this.state = props
    }


}

export const containerQuiz: any = new QuizContainer({})
window['auiz'] = containerQuiz
export default QuizContainer