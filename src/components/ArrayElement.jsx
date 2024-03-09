import React from "react";
function ArrayElement({ element, active, sorted, move }) {
    const styles = {
        transform: `translate(${move}px)`,
    };
    return (
        <div
            className={`array-element ${active && "active"} ${
                sorted && "sorted"
            }`}
            style={styles}
        >
            {element}
        </div>
    );
}

export default ArrayElement;
