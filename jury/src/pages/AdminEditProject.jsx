import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import "../components/AdminEditProject/AdminEditProject.css";
import AdminEditProjectModal from "../components/AdminEditProject/AdminEditProjectModal";
import Project from "../components/AdminEditProject/Project";
import Navbar from "../components/navbar/Navbar";



const AdminEditProject = (props) => {
    const [update, setUpdate] = useState(false)

    localStorage.setItem("visible", "")


    const axiosPrivate = useAxiosPrivate();

    const EventId = localStorage.getItem("EventId")

    const [projects, setProject] = useState([])

    const [modalActive, setModalActive] = useState(false);

    const createProject = (newProject) => {
        setProject( [...projects, newProject])
    }

    const removeProject = (project) => {
        setProject(projects.filter(p => p.id !== project.id))
    }
    async function getinf() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/projects/events/${EventId}`
        ).then(response => {
            setProject(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    console.log(EventId)

    return (
        <>
            <section className="AdminEditProject">
                <div className="AdminEditProject__pullProject">
                    {projects.map((projects, index) =>
                        <Project remove={removeProject} number={index + 1} project={projects} key={projects.id}/>
                    )}

                </div>
                <button onClick={() => setModalActive(true)}>Добавить проект</button>
            </section>
            <AdminEditProjectModal onClick={createProject} EventId={EventId} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminEditProject

