import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";
import Navbar from "../components/navbar/Navbar";
import AdminAddEvent from "./AdminAddEvent";



const JuryVote = () => {


    return (
        <>

            <section className="JuryVote">
                <h1>Мероприятия</h1>
                <div className="JuryVote__CriteriasPull">
                    {events.map((events) =>
                        <Event getId={getIdEvent} event={events} key={events.id} />
                    )}
                </div>
                <div className="AdminMain__buttons">
                    <button>Жюри</button>
                    <button onClick={() => setModalActive(true)}>Мероприятие</button>
                </div>
            </section>
            <AdminAddEvent active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default JuryVote