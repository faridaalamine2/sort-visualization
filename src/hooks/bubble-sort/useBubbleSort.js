import { useState, useMemo } from "react";
import { delay } from "../../utilities/animationUtils";
import usePositions from "./usePositions";
import useSortedElements from "./useSortedElements";
function useBubbleSort(array) {
    const tempArray = useMemo(() => Array.from(array), [array]);
    const [elementPositions, swapElements] = usePositions(array);
    const [sortedElements, addToSortedElements, setArrayAsSorted] =
        useSortedElements();
    const [currentComparisons, setCurrentComparisons] = useState([]);

    function startSort() {
        iterate(array.length);
    }
    function finishSort() {
        setCurrentComparisons([]);
        setArrayAsSorted(array);
        return;
    }
    function iterate(unsortedLength) {
        if (unsortedLength === 1) {
            return finishSort();
        }
        const isSorted = true;
        const [firstElement, secElement] = [tempArray[0], tempArray[1]];
        setCurrentComparisons([firstElement, secElement]);
        compareAdjacent(0, unsortedLength, isSorted);
    }
    async function compareAdjacent(currentIndex, unsortedLength, isSorted) {
        await delay();
        const current = tempArray[currentIndex];
        if (currentIndex === unsortedLength - 1) {
            addToSortedElements(current);
            if (isSorted) return finishSort();
            return iterate(unsortedLength - 1);
        }
        const adjacent = tempArray[currentIndex + 1];
        setCurrentComparisons([current, adjacent]);
        if (current > adjacent) {
            isSorted = false;
            swapElements(tempArray, currentIndex, currentIndex + 1);
        }
        compareAdjacent(currentIndex + 1, unsortedLength, isSorted);
    }
    return [currentComparisons, sortedElements, elementPositions, startSort];
}
export default useBubbleSort;
