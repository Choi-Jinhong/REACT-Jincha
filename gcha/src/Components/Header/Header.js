import React from "react";
import "./Header.css";

export default () => (
    <header class="nav">
        <ul>
            <li>
                <a href="/">Movies</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/tv">TV</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/Search">Search</a>
            </li>
        </ul>
    </header>
);