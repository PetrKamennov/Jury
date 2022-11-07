import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./project.css";

const Project = (props, remove) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NzMxMzgwLCJpYXQiOjE2NjUxMzkzODAsImp0aSI6IjNlYTA4ZjE2YmUzNDQyYmViZjQ1Njg5NDkzMDhlZTIzIiwidXNlcl9pZCI6Mn0.sAquDN8WQVpuJnZ8BjLqX8h4ua6KX_IvUH4sdcxDKdc"


    async function RemoveProject() {
        props.remove(props.project)
        axios.delete(`http://aleksbcg.beget.tech/projects/uni/${props.project.id}`, {
            id: props.project.id,
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
                        <span>{props.project.name_of_project}</span>  
                    </div>
                    <p>{props.project.speaker_name}</p>
                </div>
                <button className="project__button" onClick={RemoveProject}
                >Удалить</button>
            </div>
        </div>
    )
}

export default Project