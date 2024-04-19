import React, { useEffect, useState } from "react";
import ArrayElement from "../ArrayElement";
import {
    offset,
    gap,
    getHalfArray,
    getSecondHalf,
} from "../../utilities/arrayUtils";
function ArrayClone({ array, depth, pos, right }) {
    const [styles, setStyles] = useState({
        width: `${array.length * offset - gap}px`,
        left: pos ? `${pos}px` : 0,
    });
    const [clone, setClone] = useState(false);
    if (array === false) return;
    useEffect(() => {
        setStyles({
            width: `${array.length * offset - gap}px`,
            left: pos ? `${pos}px` : 0,
            transform: right
                ? `translate(${(array.length * offset - gap) / depth}px, 80px)`
                : `translate(-${
                      (array.length * offset - gap) / depth
                  }px, 80px)`,
        });
        const timeout = setTimeout(() => {
            setClone(true);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    const renderElements = array.map((element, i) => (
        <ArrayElement element={element} position={i * 51} key={element} />
    ));
    return (
        <div className={`array-clone`} style={styles}>
            {renderElements}
            {clone && (
                <ArrayClone array={getHalfArray(array)} depth={depth + 1} />
            )}
            {clone && (
                <ArrayClone
                    array={getSecondHalf(array)}
                    depth={depth + 1}
                    pos={getHalfArray(array).length * offset}
                    right={true}
                />
            )}
        </div>
    );
}

export default ArrayClone;
