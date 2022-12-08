import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "../components/AdminMeet/AdminMeet.css";
import EventProject from "../components/AdminMeet/EvetProject";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";


const AdminMeet = (props) => {
    
    const axiosPrivate = useAxiosPrivate();

    
    const [update, setUpdate] = useState(false)
    
    const [projects, setprojects] = useState([
    ])
    const EventId = localStorage.getItem("EventId")
    

    async function getinf() {

        axiosPrivate.get(`http://aleksbcg.beget.tech/projects/events/${EventId}`, {
        }).then(response => {
            setprojects(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    function getType() {
        axiosPrivate.patch(`http://aleksbcg.beget.tech/events/${EventId}`, {
            eventIsStarted: 2
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])
    console.log(setprojects)
    return (
        <>
            <section className="AdminMeet">
                <h1>Мероприятия</h1>
                <div className="AdminMeet__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProject number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
                <Link to="/Result"><button className="AdminMeet__button-done" onClick={getType}>Завершить и создать отчет</button></Link>
            </section>
        </>
    )
}

export default AdminMeet