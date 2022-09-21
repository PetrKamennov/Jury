import axios from "axios";
import React from "react";
import { useState } from "react";

import "./AdminEditProjectModal.css";

const AdminEditProjectModal = ({ active, setActive, create }) => {

    const [project, setProject] = useState({projectname: '', participant: ''})


    // const addNewProject = () => {
    //     const newProject = {
    //         ...project, id: Date.now()
    //     }
    //     create(newProject)
    //     setProject({ projectname: '', participant: '' })
    // }

    function pushProject (){
        axios.post('http://aleksbcg.beget.tech/events/', {
            eventName: project.projectname,
            eventDate: project.participant
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className={active ? "AdminEditProjectModal active" : "AdminEditProjectModal"} onClick={() => setActive(false)} >
            <div className="AdminEditProjectModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminEditProjectModal__content-container">
                    <h1>Добавление проекта</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <input placeholder="Наименование проекта " type="text" value={project.projectname} onChange={e => setProject({...project, projectname: e.target.value})}/>
                            <input placeholder="Имя конкурсанта" type="text" value={project.participant} onChange={e => setProject({ ...project, participant: e.target.value })} />
                        </div>
                        <button onClick={pushProject}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditProjectModal