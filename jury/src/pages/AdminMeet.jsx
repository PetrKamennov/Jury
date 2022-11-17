import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "../components/AdminMeet/AdminMeet.css";
import EventProject from "../components/AdminMeet/EvetProject";
import { Link } from "react-router-dom";


const AdminMeet = (props) => {
    
    const axiosPrivate = useAxiosPrivate();

    const EventId = localStorage.getItem("EventId")

    const [update, setUpdate] = useState(false)

    const [projects, setprojects] = useState([
    ])

    async function getinf() {

        axiosPrivate.get(`http://aleksbcg.beget.tech/juryGolInfo/${EventId}`, {
        }).then(response => {
            setprojects(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])
    console.log(EventId)
    return (
        <>
            <section className="AdminMeet">
                <h1>Мероприятия</h1>
                <div className="AdminMeet__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProject number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
                <Link to="/AdminMain"><button>Завершить и создать отчет</button></Link>
            </section>
        </>
    )
}

export default AdminMeet