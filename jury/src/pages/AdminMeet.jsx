import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "../components/AdminMeet/AdminMeet.css";
import EventProject from "../components/AdminMeet/EvetProject";


const AdminMeet = (props => {

    const EventId = localStorage.getItem("EventId")

    const [update, setUpdate] = useState(false)

    const [projects, setprojects] = useState([
    ])

    async function getinf() {
        axios.get(`http://aleksbcg.beget.tech/projects/${EventId}`, {
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

    return (
        <>
            <section className="AdminMeet">
                <h1>Мероприятия</h1>
                <div className="AdminMeet__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProject number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
                <button>Жюри</button>
            </section>
        </>
    )
}
)
export default AdminMeet