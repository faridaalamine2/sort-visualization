import React, { useMemo } from "react";
import { generateRandomArray } from "../../utilities/arrayUtils";
import ArrayElement from "../ArrayElement";
import useSelectionSort from "../../hooks/selection-sort/useSelectionSort";
function SelectionSort() {
    const array = useMemo(() => generateRandomArray(), []);
    const [
        currElement,
        minElement,
        sortedElements,
        elementPositions,
        startSort,
    ] = useSelectionSort(array);
    const renderElements = array.map((element, i) => {
        let active;
        let min;
        let sorted;
        if (currElement === element) active = true;
        if (minElement === element) min = true;
        if (sortedElements.includes(element)) sorted = true;
        return (
            <ArrayElement
                element={element}
                active={active}
                min={min}
                sorted={sorted}
                position={elementPositions[element]}
                key={i}
            />
        );
    });
    return (
        <>
            <div className="array">{renderElements}</div>
            <button onClick={startSort}>sort</button>
        </>
    );
}

export default SelectionSort;
