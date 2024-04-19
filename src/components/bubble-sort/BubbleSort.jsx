import { useState } from "react";
import ArrayElement from "../ArrayElement";
import { gap, generateRandomArray, offset } from "../../utilities/arrayUtils";
import useBubbleSort from "../../hooks/useBubbleSort";
import NavBar from "../NavBar";
function BubbleSort() {
    const [arrayToRender, setArray] = useState(generateRandomArray());
    const [sortActive, setSortActive] = useState(false);
    const [currentComparisons, sortedElements, elementPositions, startSort] =
        useBubbleSort(arrayToRender);
    const renderElements = arrayToRender.map((element) => {
        let active;
        let sorted;
        if (currentComparisons.includes(element)) active = true;
        if (sortedElements.includes(element)) sorted = true;
        return (
            <ArrayElement
                element={element}
                active={active}
                sorted={sorted}
                position={elementPositions[element]}
                key={element}
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
                    <div
                        className="button"
                        onClick={() => {
                            setArray(generateRandomArray());
                            setSortActive(false);
                        }}
                    >
                        Reset
                    </div>
                </div>
            </div>
        </>
    );
}

export default BubbleSort;
