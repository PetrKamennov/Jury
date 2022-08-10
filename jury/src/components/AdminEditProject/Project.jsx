import React from "react";

import "./project.css";

const Project = (props, remove) => {


    return (
        <div className="Project">
            <div className="project__text">
                <span>{props.number}.</span>
                <span>{props.project.projectname}</span>
                <span>{props.project.participant}</span>
            </div>
            <div className="project__button" onClick={() => props.remove(props.project)}></div>
        </div>
    )
}

export default Project