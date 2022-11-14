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
                            <span>{props.jury.juryname}</span>
                        </div>
                        <p>{props.jury.job}</p>
                    </div>
                    <Link><span className="ProjectJury__indicator">Хуй</span></Link> 
                </div>
            </div>
        </>
    )
}

export default ProjectJury