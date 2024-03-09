import { useState } from "react";
function useSortedElements() {
    const [sortedElements, setSortedElements] = useState([]);
    const addToSortedElements = (element) => {
        setSortedElements((prev) => [...prev, element]);
    };
    const setArrayAsSorted = (array) => {
        setSortedElements(array);
    };
    return [sortedElements, addToSortedElements, setArrayAsSorted];
}

export default useSortedElements;
