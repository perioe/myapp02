import './Card3.scss';

import React from "react";

export default function Card3({title, children}) {
    return (
        <div className="Card3">
            <header> <h1>{title}</h1></header>
            <div className="content">{children}</div>
        </div>
    )
}