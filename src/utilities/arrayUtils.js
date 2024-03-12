const elementWidth = 45; // in px
const gap = 10; // in px
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
    // return [70, 65, 60, 55, 50, 40, 35, 25];
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
export { generateRandomArray, getInitialPositions, swap };
