import React from "react";
import { Link } from "react-router-dom";

import "./ProjectJury.css";

const ProjectJury = (props, remove) => {

    function setId(){
        localStorage.setItem("projectId", props.jury.id)
    }
    const user_id = localStorage.getItem("user_id")

    const ButtonActive = localStorage.getItem(`buttonActive-${user_id}-${props.jury.id}`)



    return (
        <>
            <div className="ProjectJury">
                <div className="ProjectJury__container">
                    <div className="ProjectJury__text">
                        <div className="ProjectJury__text-spans">
                            <span>{props.number}.</span>
                            <span>{props.jury.projectName}</span>
                        </div>
                        <p>{props.jury.projectAuthor}</p>
                    </div>
                    <Link to='/JuryVote'><button onClick={setId}>Проголосовать</button></Link> 
                </div>
            </div>
        </>
    )
}

export default ProjectJury