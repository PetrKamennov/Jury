import React from "react";
import { useState } from "react";

import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";


const AdminMain = () => {

    const [events, setevent] = useState([
        { id: 1, eventname: 'Мероприятие 1', time: '10.08.2022   9:30' },
        { id: 2, eventname: 'Мероприятие 2', time: '10.08.2022   9:30' },
        { id: 3, eventname: 'Мероприятие 3', time: '10.08.2022   9:30' },
        { id: 4, eventname: 'Мероприятие 4', time: '10.08.2022   9:30' },
    ])

    return (
        <>
            <section className="AdminMain">
                <h1>Мероприятия</h1>
                <div className="AdminMain__EventPull">
                    {events.map((events) =>
                        <Event event={events} key={events.id} />
                    )}
                </div>
                <div className="AdminMain__buttons">
                    <button>Жюри</button>
                    <button>Мероприятие</button>
                </div>
            </section>
        </>
    )
}

export default AdminMain