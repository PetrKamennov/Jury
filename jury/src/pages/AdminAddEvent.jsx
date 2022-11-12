import React from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../components/AdminEditMeet/AdminEditMeet.css";
import EditCriteria from "../components/AdminEditMeet/EditCriteria";
import Criteria from "../components/AdminEditMeet/Сriteria";
import Navbar from "../components/navbar/Navbar";
import "../components/AdminEditProject/AdminEditProjectModal.css";

const AdminAddEvent = (props) => {

    const [events, setEvent] = useState({ eventName: '', eventDate: '' })


    async function addNewEvent() {
        axios.post(`http://aleksbcg.beget.tech/events/`, {
            eventName: events.eventName, 
            eventDate: events.eventDate,
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
                    <h1>Добавление мероприятия</h1>
                    <div className="AdminEditProjectModal__content-regJury">
                        <div className="AdminEditProjectModal__content-regJury__inputs">
                            <input placeholder="Наименование мероприятия " type="text" value={events.projectname} onChange={e => setEvent({ ...events, eventName: e.target.value })} />
                            <input placeholder="Дата проведения" type="text" value={events.participant} onChange={e => setEvent({ ...events, eventDate: e.target.value })} />
                        </div>
                        <button onClick={addNewEvent} >Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddEvent