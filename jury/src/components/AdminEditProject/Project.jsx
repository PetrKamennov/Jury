import React from "react";
import { useState, useEffect } from "react";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./project.css";

const Project = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();


    async function RemoveProject() {
        props.remove(props.project)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/projects/Change/${props.project.id}`, {
        }).then(response => {
            PushM()
            console.log(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
    }
    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Проект успешно Удалён.</p>
            <br/>
            <p>Если проект не удалился из списка, перезагрузите страницу.</p>
        </Notification>
    );
    const error = (
        <Notification type={'error'} 
            header={'Упс...'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте удалить ещё разочек, не сдавайтесь!</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )

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