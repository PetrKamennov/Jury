import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";
import Navbar from "../components/navbar/Navbar";
import AdminAddEvent from "./AdminAddEvent";



const AdminMain = (props, getidPZDC) => {
    const axiosPrivate = useAxiosPrivate();

    const [modalActive, setModalActive] = useState(false);

    const [update, setUpdate] = useState(false)
    const [events, setEvent] = useState([{
    },
    ])
    
    const getIdEvent = (EventIds) => {
        props.getidPZDC(EventIds)
        console.log(EventIds)
    }
    

    async function getinf(){
        axiosPrivate.get('/events/', {
        }).then(response => {
                setEvent(response.data)
            }).catch(function (error) {
                console.log(error);
            })
    }


    // setInterval(getinf, 2000);

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    console.log(events)
    
    return (
        <>

            <section className="AdminMain">
                <h1>Мероприятия</h1>
                <div className="AdminMain__EventPull">
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

export default AdminMain