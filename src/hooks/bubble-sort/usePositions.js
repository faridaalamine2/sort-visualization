import { useState } from "react";
import { getInitialMovements, swap } from "../../utilities/arrayUtils";
function usePositions(array) {
    const [elementPositions, setPositions] = useState(
        getInitialMovements(array)
    );
    const swapElements = (tempArray, currentIndex, adjacentIndex) => {
        const current = tempArray[currentIndex];
        const adjacent = tempArray[adjacentIndex];
        setPositions((prev) => {
            swap(prev, current, adjacent);
            swap(tempArray, currentIndex, currentIndex + 1);
            return { ...prev };
        });
    };
    return [elementPositions, swapElements];
}
export default usePositions;
