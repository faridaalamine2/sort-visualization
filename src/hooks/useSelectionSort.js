import { useState, useMemo } from "react";
import { delay } from "../utilities/animationUtils";
import useSortedElements from "./useSortedElements";
import usePositions from "./usePositions";
function useSelectionSort(array) {
    const tempArray = useMemo(() => Array.from(array), []);
    const [currElement, setCurrElement] = useState();
    const [minElement, setMinElement] = useState();
    const [sortedElements, addToSortedElements, setArrayAsSorted] =
        useSortedElements(tempArray);
    const [elementPositions, swapElements] = usePositions(tempArray);

    function startSort() {
        iterate(0, array.length);
    }
    function finishSort() {
        setCurrElement(undefined);
        setMinElement(undefined);
        setArrayAsSorted();
    }
    async function iterate(currIndex, length) {
        if (currIndex === length - 1) {
            return finishSort();
        }
        let minIndex = currIndex;
        setMinElement(tempArray[minIndex]);
        setCurrElement(tempArray[currIndex + 1]);
        minIndex = await getMin(currIndex + 1, minIndex, length);
        if (minIndex !== currIndex) {
            swapElements(minIndex, currIndex);
        }
        iterate(currIndex + 1, length);
    }
    async function getMin(currIndex, minIndex, length) {
        const min = tempArray[minIndex];
        const current = tempArray[currIndex];
        if (currIndex === length) {
            addToSortedElements(min);
            return minIndex;
        }
        setCurrElement(current);
        await delay();
        if (current < min) {
            minIndex = currIndex;
            setMinElement(current);
        }
        return getMin(currIndex + 1, minIndex, length);
    }
    return [
        currElement,
        minElement,
        sortedElements,
        elementPositions,
        startSort,
    ];
}

export default useSelectionSort;
