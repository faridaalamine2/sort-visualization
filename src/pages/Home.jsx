import React from "react";
import "../styling/home.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <div>
            <h1 className="page-title">
                Welcome to Our Sorting Visualization App!
            </h1>
            <div className="content">
                <p>
                    Sorting is an essential concept in computer science, it is
                    the process of arranging items systematically. By sorting
                    data, we can easily search, retrieve, and analyze it.
                </p>
                <p>
                    Our Sorting Visualization App provides a unique way to
                    understand how sorting algorithms work. By visualizing the
                    sorting process step-by-step, users can gain a deeper
                    insight into how different algorithms operate. This
                    interactive experience would be an invaluable learning tool
                    for students and professionals alike.
                </p>
            </div>
            <div className="available-sorts">
                <h2 className="title">Available Sorts</h2>
                <ul className="algos-list">
                    <Link to="/selection">Selection Sort</Link>
                    <Link to="/bubble">Bubble Sort</Link>
                    <Link to="/merge">Merge Sort</Link>
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
