import React, { useMemo, useState } from "react";
import {
    generateRandomArray,
    getInitialMovements,
    swap,
} from "../../utilities/arrayUtils";
import ArrayElement from "../ArrayElement";
import { delay } from "../../utilities/animationUtils";
function SelectionSort() {
    const array = useMemo(() => generateRandomArray(), []);
    const tempArray = useMemo(() => Array.from(array), []);
    const [currentElement, setCurrentElement] = useState();
    const [minElement, setMinElement] = useState();
    const [sortedElements, setSortedElements] = useState([]);
    const [lefts, setLefts] = useState(getInitialMovements(array));
    const renderElements = array.map((element, i) => {
        let active;
        let min;
        let sorted;
        if (currentElement === element) active = true;
        if (minElement === element) min = true;
        if (sortedElements.includes(element)) sorted = true;
        return (
            <ArrayElement
                element={element}
                active={active}
                min={min}
                sorted={sorted}
                left={lefts[element]}
                key={i}
            />
        );
    });
    function startSort() {
        iterate(0, array.length);
    }
    async function iterate(currIndex, length) {
        if (currIndex === length - 1) {
            setSortedElements(array);
            console.log("sorted");
            setCurrentElement(undefined);
            setMinElement(undefined);
            return;
        }
        let minIndex = currIndex;
        setMinElement(tempArray[minIndex]);
        setCurrentElement(tempArray[currIndex + 1]);
        minIndex = await getMin(currIndex + 1, minIndex, length);
        if (minIndex !== currIndex) {
            setLefts((prev) => {
                const temp = prev[tempArray[minIndex]];
                prev[tempArray[minIndex]] = prev[tempArray[currIndex]];
                prev[tempArray[currIndex]] = temp;
                swap(tempArray, currIndex, minIndex);
                iterate(currIndex + 1, length);
                return { ...prev };
            });
        } else iterate(currIndex + 1, length);
    }
    async function getMin(currIndex, minIndex, length) {
        if (currIndex === length) {
            setSortedElements((prev) => [...prev, tempArray[minIndex]]);
            return minIndex;
        }
        setCurrentElement(tempArray[currIndex]);
        await delay();
        if (tempArray[currIndex] < tempArray[minIndex]) {
            minIndex = currIndex;
            setMinElement(tempArray[minIndex]);
        }
        return getMin(currIndex + 1, minIndex, length);
    }

    return (
        <>
            <div className="array">{renderElements}</div>
            <button onClick={startSort}>sort</button>
        </>
    );
}

export default SelectionSort;
