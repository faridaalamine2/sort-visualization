import { useState } from "react";
import { getInitialPositions, swap } from "../utilities/arrayUtils";
function usePositions(array) {
    const [elementPositions, setPositions] = useState(
        getInitialPositions(array)
    );
    const swapElements = (index1, index2) => {
        const element1 = array[index1];
        const element2 = array[index2];
        setPositions((prev) => {
            const newObject = { ...prev };
            swap(newObject, element1, element2);
            return newObject;
        });
        swap(array, index1, index2);
    };
    return [elementPositions, swapElements];
}
export default usePositions;
