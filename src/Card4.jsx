import React from "react";
import styles from './Card.module.css'

export default function Card4({title, children}) {
    return (
        <div className={styles.card}>
            <header> <h1>{title}</h1></header>
            <div className={styles.content}>{children}</div>
        </div>
    )
}