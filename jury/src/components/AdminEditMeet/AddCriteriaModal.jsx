import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import "./AddCriteriaModal.css";

const AddCriteriaModal = ({ active, setActive, create }) => {

    const axiosPrivate = useAxiosPrivate();

    const navigate = useNavigate()

    const [crit, setCrit] = useState({ creteryName: '', creteryDescription: '', creteryType: ''})


    async function addNewCriteria() {
        axiosPrivate.post(`http://aleksbcg.beget.tech/createNewCretery/`, {
            creteryName: crit.creteryName,
            creteryDescription: crit.creteryDescription,
            creteryType: crit.creteryType
        }).then(response => {
            PushM()
            setCrit(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
    }


    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Критерий Установлен!</p>
            <br/>
            <p>Если Критерий не появился в списке, перезагрузите страницу.</p>
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
        addNewCriteria();
        navigate(window.location.pathname);
    }
    
    return (
        <div className={active ? "AddCriteriaModal active" : "AddCriteriaModal"} onClick={() => setActive(false)} >
            <div className="AddCriteriaModal__content" onClick={e => e.stopPropagation()}>
                <div className="AddCriteriaModal__content-container">
                    <h1>Установка Критерия</h1>
                            <div className="AddCriteriaModal__content-regJury__inputs">
                                <div className="AddCriteriaModal__content-regJury__inputs-left">
                                    <div className="AdminEditProjectModal__content-regJury__inputs__box">
                                        <input type="text" className="AddCriteriaModal__content-regJury__name" value={crit.creteryName} onChange={e => setCrit({ ...crit, creteryName: e.target.value })}/>
                                        <span>Наименование Критерия</span>
                                    </div>
                                    <div className="AdminEditProjectModal__content-regJury__inputs__box">
                                        <input  type="text" className="AddCriteriaModal__content-regJury__login" value={crit.creteryDescription} onChange={e => setCrit({ ...crit, creteryDescription: e.target.value })}/>
                                        <span>Описание Критерия</span>
                                    </div>
                                </div>
                                <div className="AddCriteriaModal__content-regJury__inputs-right">
                            <h5> Выберите Тип оценивания:</h5>
                                <select placeholder="Тип оценивания" className="AddCriteriaModal__content-regJury__job" value={crit.creteryType} onChange={e => setCrit({ ...crit, creteryType: e.target.value })}>
                                    <option value={1}>Баллы</option>
                                    <option value={2}>Односложный</option>
                                    <option value={3}>Многосложный</option>
                                </select>

                                </div>
                            </div>
                    <button onClick={restart}>Установить</button>
                </div>
            </div>
        </div>
    )
}

export default AddCriteriaModal