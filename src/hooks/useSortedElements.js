import { useState } from "react";

function useSortedElements(array) {
    const [sortedElements, setSortedElements] = useState([]);
    const addToSortedElements = (element) => {
        setSortedElements((prev) => [...prev, element]);
    };
    const setArrayAsSorted = () => {
        setSortedElements(array);
    };
    return [sortedElements, addToSortedElements, setArrayAsSorted];
}

export default useSortedElements;
