import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Notification, useToaster, Uploader } from "rsuite";
import "rsuite/dist/rsuite.min.css";



import "./AdminEditProjectModal.css";
const AdminEditProjectModal = (props, {create}) => {

    const navigate = useNavigate();
    
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
            PushM();
            console.log(response.data)
        }).catch(function (error) {
            PushE(error);
        })
        setProject({ projectName: '', projectAuthor: '' })
    }

    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Проект успешно создан.</p>
            <br/>
            <p>Если проект не появился, перезагрузите страницу.</p>
        </Notification>
    );
    const error = (
        <Notification type={'error'} 
            header={'Упс...'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте ещё раз, не сдавайтесь!</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )

    function restart(){
        addNewProject();
        navigate(window.location.pathname)
    }

    return (
        <div className={props.active ? "AdminEditProjectModal active" : "AdminEditProjectModal"} onClick={() => props.setActive(false)} >
            <div className="AdminEditProjectModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminEditProjectModal__content-container">
                    <h1>Добавление проекта</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <div className="AdminEditProjectModal__content-regJury__inputs__box projectName">
                                <input type="text" value={project.projectName} onChange={(e) => setProject({ ...project, projectName: e.target.value})}/>
                                <span>Наименование проекта</span>
                            </div>
                            <div className="AdminEditProjectModal__content-regJury__inputs__box projectAuthor">
                                <input type="text" value={project.projectAuthor} onChange={(e) => setProject({ ...project, projectAuthor: e.target.value })} />
                                <span>Имя конкурсанта</span>
                            </div>

                        </div>
                        <button disabled={!project.projectAuthor && !project.projectName || !project.projectName || !project.projectAuthor} type="submit" onClick={restart} >Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditProjectModal