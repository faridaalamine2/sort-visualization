import React, { useState } from "react";
import { gap, generateRandomArray, offset } from "../../utilities/arrayUtils";
import ArrayElement from "../ArrayElement";
import useSelectionSort from "../../hooks/useSelectionSort";
import NavBar from "../NavBar";

function SelectionSort() {
    const [arrayToRender, setArray] = useState(generateRandomArray());
    const [sortActive, setSortActive] = useState(false);
    const [
        currElement,
        minElement,
        sortedElements,
        elementPositions,
        startSort,
    ] = useSelectionSort(arrayToRender);
    const renderElements = arrayToRender.map((element, i) => {
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
            <NavBar />
            <div className="container">
                <div
                    className="array"
                    style={{
                        width: `${arrayToRender.length * offset - gap}px`,
                    }}
                >
                    {renderElements}
                </div>
                <div className="buttons">
                    <div
                        className={!sortActive ? "button" : "button disabled"}
                        onClick={() => {
                            if (!sortActive) {
                                setSortActive(true);
                                startSort();
                            }
                        }}
                    >
                        Sort
                    </div>
                    {/* <div
                        className="button"
                        onClick={() => {
                            setArray(generateRandomArray());
                            setSortActive(false);
                        }}
                    >
                        Reset
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default SelectionSort;
