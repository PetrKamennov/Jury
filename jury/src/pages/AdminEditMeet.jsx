import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../components/AdminEditMeet/AdminEditMeet.css";
import EditCriteria from "../components/AdminEditMeet/EditCriteria";
import Criteria from "../components/AdminEditMeet/Сriteria";
import Navbar from "../components/navbar/Navbar";

const AdminEditMeet = (props) => {



    const [update, setUpdate] = useState(false)

    const [criterias, setcriteria] = useState([])
    const [events, setevents] = useState({eventName: '', eventDate: ''})

    const createcriteria = (newCriteria) => {
        setcriteria([...criterias, newCriteria])
    }

    const removeProject = (criteria) => {
        setcriteria(criterias.filter(p => p.id !== criteria.id))
    }

    async function getEvent() {
        axios.get(`http://aleksbcg.beget.tech/cretery/getCretery/${props.EventId}`, {
        }).then(response => {
            setcriteria(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getEvent()
    }, [update])

    async function editEvent() {
        axios.patch(`http://aleksbcg.beget.tech/events/${props.EventId}/`, {
            id: props.EventId,
            eventName: events.eventName,
            eventDate: events.eventDate
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }


    async function removeEvent() {
        axios.delete(`http://aleksbcg.beget.tech/events/${props.EventId}`, {
            id: props.EventId,
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    console.log(criterias)

    return (
        <>
            <Navbar/>
            <section className="AdminEditMeet">
                <div className="AdminEditMeet__firstBlock">
                    <div className="AdminEditMeet__firstBlock-container">
                        <div className="AdminEditMeet__firstBlock__left">
                            <input placeholder="Наименование проекта" type="text" value={events.eventName} onChange={e => setevents({ ...events, eventName: e.target.value })} />
                            <input placeholder="Дата и время проведения" type="text" value={events.eventDate} onChange={e => setevents({ ...events, eventDate: e.target.value })} />
                        </div>
                        <div className="AdminEditMeet__firstBlock__right">
                            <Link to='/AdminMain'><button onClick={removeEvent}>Удалить мероприятие</button></Link>
                            <button onClick={editEvent}>Добавить члена жюри</button>
                        </div>
                    </div>
                </div>
                <div className="AdminEditMeet__secondBlock">
                    <div className="AdminEditMeet__secondBlock__header">
                        <h1>Критерии оценивания</h1>
                    </div>
                    <div className="AdminEditMeet__secondBlock-container">
                        <div className="AdminEditMeet__secondBlock__criteriaPull">
                            {criterias.map((criterias, index) =>
                                <Criteria remove={removeProject} number={index + 1} criteria={criterias} key={criterias.id} />
                            )}
                        </div>
                        <EditCriteria EventId={props.EventId} create={createcriteria}/>
                    </div>
                </div>
                <button>Сохранить</button>
            </section>
        </>
    )
}

export default AdminEditMeet