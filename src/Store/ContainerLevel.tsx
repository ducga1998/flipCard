import {Container} from 'unstated-x'
import {v4 as uuid} from 'uuid';

class ContainerLevel extends Container<{ levels : any[]  , levelSelect : any } > {
    constructor(props) {
        super(props);
        this.state = props
    }
    async createLevel(level) {
        await this.setState({levels : [...this.state.levels , ...[level]]})
    }
    async selectLevel  (level ){
       await this.setState({levelSelect : level})
    }
}

export default ContainerLevel
