import { useState } from "react";
import "./main-bubble.scss";
import ArrayElement from "./ArrayElement";
import { generateRandomArray } from "../utilities/arrayUtils";
import useBubbleSort from "../hooks/bubble-sort/useBubbleSort";

function BubbleSort() {
    const [array] = useState(generateRandomArray());
    const [currentComparisons, sortedElements, elementMovements, startSort] =
        useBubbleSort(array);
    const renderElements = array.map((element) => {
        let active;
        let sorted;
        if (currentComparisons.includes(element)) active = true;
        if (sortedElements.includes(element)) sorted = true;
        return (
            <ArrayElement
                element={element}
                active={active}
                sorted={sorted}
                move={elementMovements[element]}
                key={element}
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

export default BubbleSort;
