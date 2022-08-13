import React from "react";
import { useState } from "react";

import "../components/AdminMeet/AdminMeet.css";
import EventProject from "../components/AdminMeet/EvetProject";


const AdminMeet = () => {

    const [events, setevent] = useState([
        { id: 1, eventname: 'Мероприятие 1', time: '10.08.2022   9:30' },
        { id: 2, eventname: 'Мероприятие 2', time: '10.08.2022   9:30' },
        { id: 3, eventname: 'Мероприятие 3', time: '10.08.2022   9:30' },
        { id: 4, eventname: 'Мероприятие 4', time: '10.08.2022   9:30' },
    ])

    return (
        <>
            <section className="AdminMeet">
                <h1>Мероприятия</h1>
                <div className="AdminMeet__ProjektPull">
                    <EventProject/>
                </div>
                <button>Жюри</button>
            </section>
        </>
    )
}

export default AdminMeet