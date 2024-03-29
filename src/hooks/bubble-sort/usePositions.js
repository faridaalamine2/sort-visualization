import { useState } from "react";
import { getInitialPositions, swap } from "../../utilities/arrayUtils";
function usePositions(array) {
    const [elementPositions, setPositions] = useState(
        getInitialPositions(array)
    );
    const swapElements = (currentIndex, adjacentIndex) => {
        const current = array[currentIndex];
        const adjacent = array[adjacentIndex];
        setPositions((prev) => {
            swap(prev, current, adjacent);
            swap(array, currentIndex, adjacentIndex);
            return { ...prev };
        });
    };
    return [elementPositions, swapElements];
}
export default usePositions;
