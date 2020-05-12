import {Container} from 'unstated-x'
import {insertAt} from "../util";

class ContainerLevel extends Container<{ levels : any[]  , levelSelect : any } > {
    constructor(props) {
        super(props);
        this.state = props
    }

    async createLevel(level) {
        await this.setState({levels: [...this.state.levels, ...[level]]})
    }

    async selectLevel(level) {
        await this.setState({levelSelect: level})
    }

    async duplicateLevel(index) {
        const levelDuplicate = this.state.levels[index]
        const newArray = insertAt(this.state.levels, index, levelDuplicate)
        await this.setState({levels: newArray})
    }

    async deleteLevel(id) {
        const newListLevel = this.state.levels.filter(level => level.state.id !== id)
        await this.setState({levels: newListLevel})
    }
}

export default ContainerLevel
