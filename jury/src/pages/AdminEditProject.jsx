import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import "../components/AdminEditProject/AdminEditProject.css";
import AdminEditProjectModal from "../components/AdminEditProject/AdminEditProjectModal";
import Project from "../components/AdminEditProject/Project";
import Navbar from "../components/navbar/Navbar";



const AdminEditProject = (props) => {
    const [update, setUpdate] = useState(false)

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NzMxMzgwLCJpYXQiOjE2NjUxMzkzODAsImp0aSI6IjNlYTA4ZjE2YmUzNDQyYmViZjQ1Njg5NDkzMDhlZTIzIiwidXNlcl9pZCI6Mn0.sAquDN8WQVpuJnZ8BjLqX8h4ua6KX_IvUH4sdcxDKdc"


    const [projects, setProject] = useState([
    ])

    const [modalActive, setModalActive] = useState(false);

    // const createProject = (newProject) => {
    //     setProject( [...projects, newProject])
    // }

    const removeProject = (project) => {
        setProject(projects.filter(p => p.id !== project.id))
    }
    async function getinf() {
        axios.get(`http://aleksbcg.beget.tech/projects/${props.EventId}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => {
            setProject(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    return (
        <>
            <Navbar/>
            <section className="AdminEditProject">
                <div className="AdminEditProject__pullProject">
                    {projects.map((projects, index) =>
                        <Project EventId={props.EventId} remove={removeProject} number={index + 1} project={projects} key={projects.id}/>
                    )}

                </div>
                <button onClick={() => setModalActive(true)}>Добавить проект</button>
            </section>
            <AdminEditProjectModal EventId={props.EventId} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminEditProject

