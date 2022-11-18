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
                            <span>{props.number}</span>
                        </div>
                        <p>{props.jury.juryName}</p>
                    </div>
                    <span className="ProjectJury__indicator">
                        {props.jury.state == true ? 
                            <p>Проголосовал</p>
                            : <p>Не проголосовал</p>
                        }
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProjectJury