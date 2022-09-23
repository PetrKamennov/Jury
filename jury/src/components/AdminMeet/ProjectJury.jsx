import React from "react";
import { Link } from "react-router-dom";

import "./ProjectJury.css";

const ProjectJury = (props, remove) => {


    return (
        <>
            <div className="ProjectJury">
                <div className="ProjectJury__container">
                    <div className="ProjectJury__text">
                        <div className="ProjectJury__text-spans">
                            <span>{props.number}.</span>
                            <span>{props.jury.fio}</span>
                        </div>
                        <p>{props.jury.post}</p>
                    </div>
                    <span className="ProjectJury__indicator">ready</span>
                </div>
            </div>
        </>
    )
}

export default ProjectJury