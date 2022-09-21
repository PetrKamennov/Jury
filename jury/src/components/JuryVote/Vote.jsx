import React from "react";
import { useState } from "react";

import "./Vote.css";


const Vote = () => {

    return (
        <>
            <section className="Vote">
                <div className="Vote__top">
                    <span></span>
                    <span></span>
                </div>
                <div className="Vote__bottom">
                    <select name="voting">
                        <option value="value1" selected>1</option>
                        <option value="value2">2</option>
                        <option value="value3">3</option>
                        <option value="value4">4</option>
                        <option value="value5">5</option>
                    </select>
                </div>
            </section>
        </>
    )
}

export default Vote