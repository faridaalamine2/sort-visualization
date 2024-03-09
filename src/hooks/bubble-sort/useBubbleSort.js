import { useState } from "react";
import { runWithDelay } from "../../utilities/animationUtils";
import useMovements from "./useMovements";
import useSortedElements from "./useSortedElements";
function useBubbleSort(array) {
    const tempArray = Array.from(array);
    const [elementMovements, swapElements] = useMovements(array);
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
        runWithDelay(() => compareAdjacent(0, unsortedLength, isSorted));
    }
    function compareAdjacent(currentIndex, unsortedLength, isSorted) {
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
        runWithDelay(() =>
            compareAdjacent(currentIndex + 1, unsortedLength, isSorted)
        );
    }
    return [currentComparisons, sortedElements, elementMovements, startSort];
}
export default useBubbleSort;
