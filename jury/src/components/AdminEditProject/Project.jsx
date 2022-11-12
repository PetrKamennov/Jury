import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./project.css";

const Project = (props, remove) => {



    async function RemoveProject() {
        props.remove(props.project)
        axios.delete(`http://aleksbcg.beget.tech/projects/Change/${props.project.id}`, {
            id: props.project.id,
            projectName: props.project.projectName,
            projectAuthor: props.project.projectAuthor,
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <div className="Project">
            <div className="project__container">
                <div className="project__text">
                    <div className="project__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.project.projectName}</span>  
                    </div>
                    <p>{props.project.projectAuthor}</p>
                </div>
                <button className="project__button" onClick={RemoveProject}
                >Удалить</button>
            </div>
        </div>
    )
}

export default Project