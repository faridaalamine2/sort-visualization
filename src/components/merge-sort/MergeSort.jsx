import React, { useState } from "react";
import {
    gap,
    generateRandomArray,
    offset,
    getHalfArray,
    getSecondHalf,
} from "../../utilities/arrayUtils";
import ArrayElement from "../ArrayElement";
import NavBar from "../NavBar";
import "../../styling/merge-sort.scss";
import ArrayClone from "./ArrayClone";
const array = generateRandomArray();

function MergeSort() {
    return (
        <>
            <NavBar />
            <div>
                This has not been implemented yet -.-, <br />
                until we build it, you can check other sorts!
            </div>
        </>
    );
    // const [clone, setClone] = useState(false);
    // const showClone = () => {
    //     setClone(!clone);
    // };
    // const renderElements = array.map((element, i) => (
    //     <ArrayElement element={element} position={i * offset} key={element} />
    // ));
    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",
    //         }}
    //     >
    //         <div>
    //             <button onClick={showClone}>divide</button>
    //         </div>
    //         <div
    //             className="array"
    //             style={{
    //                 width: `${array.length * offset - gap}px`,
    //             }}
    //         >
    //             {renderElements}
    //             {clone && <ArrayClone array={getHalfArray(array)} depth={1} />}
    //             {clone && (
    //                 <ArrayClone
    //                     array={getSecondHalf(array)}
    //                     pos={getHalfArray(array).length * offset}
    //                     depth={1}
    //                     right={true}
    //                 />
    //             )}
    //         </div>
    //     </div>
    // );
}

export default MergeSort;
