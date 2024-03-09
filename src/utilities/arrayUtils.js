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
const getInitialMovements = (array) => {
    const elementMovements = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        elementMovements[element] = 0;
    }
    return elementMovements;
};

const swap = (array, index1, index2) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
};
export { generateRandomArray, getInitialMovements, swap };
