import React from "react";
import { useState } from "react";

import "../components/AdminEditProject/AdminEditProject.css";
import AdminEditProjectModal from "../components/AdminEditProject/AdminEditProjectModal";
import Project from "../components/AdminEditProject/Project";
import Navbar from "../components/navbar/Navbar";

const AdminEditProject = () => {

    const [projects, setProject] = useState([
        { id: 1, projectname: 'Проект хуйни', participant: 'Долбаеееб' },
        { id: 2, projectname: 'Проект хуйни', participant: 'Долбаеееб' },
        { id: 3, projectname: 'Проект хуйни', participant: 'Долбаеееб' },
        { id: 4, projectname: 'Проект хуйни', participant: 'Долбаеееб' },
    ])

    const [modalActive, setModalActive] = useState(false);

    const createProject = (newProject) => {
        setProject( [...projects, newProject])
    }

    const removeProject = (project) => {
        setProject(projects.filter(p => p.id !== project.id))
    }

    return (
        <>
            <Navbar/>
            <section className="AdminEditProject">
                <div className="AdminEditProject__pullProject">
                    {projects.map((projects, index) =>
                        <Project remove={removeProject} number={index + 1} project={projects} key={projects.id}/>
                    )}

                </div>
                <button onClick={() => setModalActive(true)}>Добавить проект</button>
            </section>
            <AdminEditProjectModal create={createProject} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminEditProject