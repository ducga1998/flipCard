import {Container} from 'unstated-x'
import {insertAt} from "../util";
import {toast} from 'react-toastify'
import KahootContainerQuestion from "./ContainerKahoot";

class ContainerLevel extends Container<{ levels: any[], levelSelect: any }> {
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
        // delete levelDuplicate.state.id
        const newContainer = new KahootContainerQuestion({...levelDuplicate.state, ...{id: undefined}})
        const newArray = insertAt(this.state.levels, index, newContainer)
        await this.setState({levels: newArray})
    }

    async deleteLevel(id) {
        const newListLevel = this.state.levels.filter(level => level.state.id !== id)
        await this.setState({levels: newListLevel})
    }

    saveData = () => {
        const data = this.state.levels.map(level => {
            return level.state
        })
        localStorage.setItem('kahoot-version-duc', JSON.stringify(data))
        toast.success("Save Data Success")
    }
    importData = () => {
        const dataSavedJSON = localStorage.getItem('kahoot-version-duc')
        const dataSaved = JSON.parse(dataSavedJSON)
        if (dataSaved) {
            const listContainer = dataSaved.map(item => {
                const container = new KahootContainerQuestion(item)
                return container
            })
            this.setState({levels: listContainer, levelSelect: listContainer[0]}, () => {
                toast.success("Load Data Success")
            })
        }


    }
}

export default ContainerLevel
