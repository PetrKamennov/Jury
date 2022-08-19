import React from "react";

import "./Criteria.css";

const Criteria = (props, remove) => {


    return (
        <>
            <div className="Criteria">
                <div className="Criteria__container">
                    <div className="Criteria__text">
                        <div className="Criteria__text-spans">
                            <span>{props.number}.</span>
                            <span>{props.criteria.criterianame}</span>
                        </div>
                        <p>{props.criteria.description}</p>
                    </div>
                    <button className="Criteria__button" onClick={() => props.remove(props.criteria)}>Удалить</button>
                </div>
            </div>
        </>
    )
}

export default Criteria