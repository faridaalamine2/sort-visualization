import React from "react";
function Component({ element, active, min, sorted, left }) {
    return (
        <div
            className={`array-element ${active && "active"} 
            ${min && "min"}
            ${sorted && "sorted"}`}
            style={{
                left: `${left}px`,
            }}
        >
            {element}
        </div>
    );
}

const ArrayElement = React.memo(Component);
export default ArrayElement;
