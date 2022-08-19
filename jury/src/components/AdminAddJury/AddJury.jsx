import React from "react";

import "./addJury.css";

const AddJury = (props, remove) => {


    return (
        <div className="Jury">
            <div className="Jury__container">
                <div className="Jury__text">
                    <div className="Jury__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.jury.juryname}</span>
                    </div>
                    <p>{props.jury.job}</p>
                </div>
                <button className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddJury