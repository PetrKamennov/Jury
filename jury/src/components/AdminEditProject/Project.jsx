import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./project.css";

const Project = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();


    async function RemoveProject() {
        props.remove(props.project)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/projects/Change/${props.project.id}`, {
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