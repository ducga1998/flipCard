import _difference from 'lodash/difference'

export const getArrayRandom = (parentArr, max, total) => {
    const arrRandom = []
    const arrIndex = []
    while (true) {
        if (arrRandom.length === total) {
            break;
        }

        const indexRandom = Math.floor(Math.random() * (max + 1));
        if (!arrIndex.includes(indexRandom)) {
            arrRandom.push(parentArr[indexRandom])

        }
        arrIndex.push(indexRandom)
    }
    // for (let i = 0; i < total; i++) {
    //     const indexRandom = Math.floor(Math.random() * (max + 1));
    //     const elementRandom = parentArr[indexRandom]
    //     arrRandom.push(elementRandom)
    // }
    return arrRandom
}

export function makeArrStringRanDom(length, excludeElementArray) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return [..._difference(result.split(''), (excludeElementArray || [])), ...excludeElementArray];
}

export function shuffleElementInArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function insertAt(array, index, elemment) {
    const cloneArray = [...array]
    cloneArray.splice(index, 0, elemment);
    return cloneArray
}
export const IN_ORDER_COLOR = ['rgb(226, 27, 60)', 'rgb(19, 104, 206)', 'rgb(216, 158, 0)', 'rgb(38, 137, 12)']
export const IN_ORDER_ICON = ['triangle', 'diamond', 'circle', 'square']