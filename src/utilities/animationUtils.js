const elementWidth = 45; // in px
const gap = 10; // in px
const offset = elementWidth + gap;
const delay = 500; //in milliseconds
const moveFront = (initial) => {
    return initial + offset;
};
const moveBack = (initial) => {
    return initial - offset;
};
const runWithDelay = (func) => {
    setTimeout(() => {
        func();
    }, delay);
};
export { moveFront, moveBack, runWithDelay };
