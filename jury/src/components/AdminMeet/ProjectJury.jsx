import React from "react";
import { Link } from "react-router-dom";

import "./ProjectJury.css";

const ProjectJury = (props, remove) => {



    console.log(props.jury)
    return (
        <>
            <div className="ProjectJury">
                <div className="ProjectJury__container">
                    <div className="ProjectJury__text">
                        <div className="ProjectJury__text-spans">
                            <span>{props.number}.</span>
                            {props.project.map(() => 
                                <></>
                            )}
                        </div>
                        <p>{props.jury.first_name}</p>
                    </div>
                    <span className="ProjectJury__indicator"></span>
                </div>
            </div>
        </>
    )
}

export default ProjectJury