const elementWidth = 45; // in px
const gap = 6; // in px
const offset = elementWidth + gap;

const getRandomNumber = () => {
    const [min, max] = [1, 100];
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomArray = (length = 10) => {
    const array = [];
    let counter = 0;
    while (counter < length) {
        const randomNumber = getRandomNumber();
        if (array.includes(randomNumber)) continue;
        array.push(randomNumber);
        counter++;
    }
    return array;
};
const getInitialPositions = (array) => {
    const elementPositions = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        elementPositions[element] = i * offset;
    }
    return elementPositions;
};

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};
const getHalfArray = (arr) => {
    if (arr.length === 1) return false;
    const halfIndex = Math.ceil(arr.length / 2);
    return arr.slice(0, halfIndex);
};
const getSecondHalf = (arr) => {
    if (arr.length === 1) return false;
    const halfIndex = Math.ceil(arr.length / 2);
    return arr.slice(halfIndex);
};
export {
    generateRandomArray,
    offset,
    gap,
    getInitialPositions,
    swap,
    getHalfArray,
    getSecondHalf,
};
