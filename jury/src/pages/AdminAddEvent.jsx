import React from "react";
import { useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
// import "../components/AdminEditMeet/AdminEditMeet.css";
import EditCriteria from "../components/AdminEditMeet/EditCriteria";
import Criteria from "../components/AdminEditMeet/Сriteria";
import Navbar from "../components/navbar/Navbar";
import "../components/AdminEditProject/AdminEditProjectModal.css";
import { Notification, useToaster } from "rsuite";

const AdminAddEvent = (props) => {

    const [events, setEvent] = useState({ eventName: '', eventDate: '' })

    const axiosPrivate = useAxiosPrivate();


    async function addNewEvent() {
        axiosPrivate.post(`http://aleksbcg.beget.tech/events/`, {
            eventName: events.eventName, 
            eventDate: events.eventDate,
        }).then(response => {
            PushM()
            setEvent({ eventName: '', eventDate: '' })
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
            <p>Мероприятие Добавлено.</p>
            <br/>
            <p>Обновите информацию нажав но сопутсвующую кнопку.</p>
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


    return (
        <div className={props.active ? "AdminEditProjectModal active" : "AdminEditProjectModal"} onClick={() => props.setActive(false)} >
            <div className="AdminEditProjectModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminEditProjectModal__content-container">
                    <h1>Добавление мероприятия</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <div className="AdminEditProjectModal__content-regJury__inputs__box eventName">
                                <input className="AdminAddEvent_first_input" type="text" value={events.eventName} onChange={e => setEvent({ ...events, eventName: e.target.value })}/>
                                <span>Наименование мероприятия</span>
                            </div>
                            <div className="AdminEditProjectModal__content-regJury__inputs__box eventDate">
                                <input className="AdminAddEvent_scnd_input" type="date" value={events.eventDate} onChange={e => setEvent({ ...events, eventDate: e.target.value })}/>
                                <span>Дата проведения</span>
                            </div>
                        </div>
                        <button onClick={addNewEvent} >Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddEvent