import React from "react";
import styles from "./Header.module.css";

export default () => (
    <header>
        <ul className={styles.navList}>
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