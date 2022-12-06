import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import "../components/AdminEditMeet/AdminEditMeet.css";
import EditCriteria from "../components/AdminEditMeet/EditCriteria";
import Criteria from "../components/AdminEditMeet/Сriteria";
import Navbar from "../components/navbar/Navbar";
import UpdateBut from "../components/UpdateBut/UpdateBut";

const AdminEditMeet = (props) => {

    const EventId = localStorage.getItem("EventId")

    const axiosPrivate = useAxiosPrivate();


    const [update, setUpdate] = useState(false)

    const [criterias, setcriteria] = useState([])
    const [crits, setcrits] = useState([])
    const [events, setevents] = useState({eventName: '', eventDate: ''})

    const createcriteria = (newCriteria) => {
        setcriteria([...criterias, newCriteria])
    }

    const removeProject = (criteria) => {
        setcriteria(criterias.filter(p => p.id !== criteria.id))
    }

    async function getEvent() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/GetCreteryOnEvent/${EventId}`)
        .then(response => {
            setcriteria(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    async function getCretery() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/returnCretery/${EventId}`)
        .then(response => {
            setcrits(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }


    useEffect(() => {
        if (update) return
        getEvent()
        getCretery()
    }, [update])

    console.log(localStorage.getItem("id"))

    async function editEvent() {
        axiosPrivate.patch(`http://aleksbcg.beget.tech/events/${EventId}`, {
            id: EventId,
            eventName: events.eventName,
            eventDate: events.eventDate,
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }


    async function removeEvent() {
        axiosPrivate.delete(`http://aleksbcg.beget.tech/events/${EventId}`)
        .then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    console.log(criterias)

    return (
        <>
            <section className="AdminEditMeet">
                <div className="AdminEditMeet__firstBlock">
                    <div className="AdminEditMeet__firstBlock-container">
                        <div className="AdminEditMeet__firstBlock__left">
                            <div className="AdminEditMeet__firstBlock__left__input__box event">
                                <input type="text" value={events.eventName} onChange={e => setevents({ ...events, eventName: e.target.value })} />
                                <span>Наименование проекта</span>
                            </div>
                            <div className="AdminEditMeet__firstBlock__left__input__box date">
                                <input type="date" value={events.eventDate} onChange={e => setevents({ ...events, eventDate: e.target.value })} />
                                <span>Дата и время проведения</span>
                            </div>
                        </div>
                        <div className="AdminEditMeet__firstBlock__right">
                            <Link to='/AdminMain'><button onClick={removeEvent}>Удалить мероприятие</button></Link>
                            <button onClick={editEvent}>Отредактировать Мероприятие</button>
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
                                <Criteria remove={removeProject} id={index} number={index + 1} crits={crits} criterias={criterias} key={criterias.id} />
                            )}
                        </div>
                        <EditCriteria create={createcriteria}/>
                    </div>
                </div>
                <div className="AdminEditMeet__Buttons">
                    <Link to="/AdminMain"><button className="AdminMeet__save-button">Сохранить</button></Link>
                </div>
            </section>
        </>
    )
}

export default AdminEditMeet