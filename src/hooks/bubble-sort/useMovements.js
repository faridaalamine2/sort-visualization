import { useState } from "react";
import { moveFront, moveBack } from "../../utilities/animationUtils";
import { getInitialMovements, swap } from "../../utilities/arrayUtils";
function useMovements(array) {
    const [elementMovements, setMovements] = useState(
        getInitialMovements(array)
    );
    const swapElements = (tempArray, currentIndex, adjacentIndex) => {
        const current = tempArray[currentIndex];
        const adjacent = tempArray[adjacentIndex];
        setMovements((prev) => {
            prev[current] = moveFront(prev[current]);
            prev[adjacent] = moveBack(prev[adjacent]);
            swap(tempArray, currentIndex, currentIndex + 1);
            return { ...prev };
        });
    };
    return [elementMovements, swapElements];
}
export default useMovements;
