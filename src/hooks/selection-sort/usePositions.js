import { useState } from "react";
import { getInitialPositions, swap } from "../../utilities/arrayUtils";
function usePositions(array) {
    const [elementPositions, setPositions] = useState(
        getInitialPositions(array)
    );
    // const swapElements = (currIndex, minIndex, iterate) => {
    //     const element1 = array[currIndex];
    //     const element2 = array[minIndex];
    //     setPositions((prev) => {
    //         swap(prev, element1, element2);
    //         swap(array, currIndex, minIndex);
    //         iterate(currIndex + 1, array.length);
    //         return { ...prev };
    //     });
    // };
    return [elementPositions, setPositions];
}
export default usePositions;
