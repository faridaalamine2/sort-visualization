import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SelectionSort from "./components/selection-sort/SelectionSort";
import BubbleSort from "./components/bubble-sort/BubbleSort";
import MergeSort from "./components/merge-sort/MergeSort";
import "./styling/array.scss";
function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/selection" element={<SelectionSort />} />
            <Route path="/bubble" element={<BubbleSort />} />
            <Route path="merge" element={<MergeSort />} />
        </Routes>
    );
}

export default App;
