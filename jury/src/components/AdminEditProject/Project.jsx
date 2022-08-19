import React from "react";

import "./project.css";

const Project = (props, remove) => {


    return (
        <div className="Project">
            <div className="project__container">
                <div className="project__text">
                    <div className="project__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.project.projectname}</span>  
                    </div>
                    <p>{props.project.participant}</p>
                </div>
                <button className="project__button" onClick={() => props.remove(props.project)}>Удалить</button>
            </div>
        </div>
    )
}

export default Project