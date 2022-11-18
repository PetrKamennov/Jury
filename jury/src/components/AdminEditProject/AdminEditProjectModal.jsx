import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import React from "react";
import { useState } from "react";

import "./AdminEditProjectModal.css";
import { Link } from "react-router-dom";

const AdminEditProjectModal = (props, {create}) => {
    
    const [update, setUpdate] = useState(false)

    const EventId = localStorage.getItem("EventId")

    const axiosPrivate = useAxiosPrivate();



    const [project, setProject] = useState({ projectName: '', projectAuthor: ''})


     /*const addNewProjects = () => {
         const newProject = {
         ...project, id: Date.now()
         }
         create(newProject)
         setProject({ projectname: '', participant: '' })
     }*/

    async function addNewProject() {
        // addNewProjects()
        axiosPrivate.post(`http://aleksbcg.beget.tech/projects/`,
        {

            events: EventId,
            projectName: project.projectName,
            projectAuthor: project.projectAuthor
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    

    return (
        <div className={props.active ? "AdminEditProjectModal active" : "AdminEditProjectModal"} onClick={() => props.setActive(false)} >
            <div className="AdminEditProjectModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminEditProjectModal__content-container">
                    <h1>Добавление проекта</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <div className="AdminEditProjectModal__content-regJury__inputs__box projectName">
                                <input type="text" value={project.projectName} onChange={e => setProject({ ...project, projectName: e.target.value})}/>
                                <span>Наименование проекта</span>
                            </div>
                            <div className="AdminEditProjectModal__content-regJury__inputs__box projectAuthor">
                                <input type="text" value={project.projectAuthor} onChange={e => setProject({ ...project, projectAuthor: e.target.value })} />
                                <span>Имя конкурсанта</span>
                            </div>

                        </div>
                        <Link to="/AdminEditProject"><button disabled={!project.projectAuthor && !project.projectName || !project.projectName || !project.projectAuthor} onClick={addNewProject} >Добавить</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditProjectModal