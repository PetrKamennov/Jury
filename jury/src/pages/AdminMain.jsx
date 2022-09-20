import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

import Event from "../components/AdminMain/Event";
import "../components/AdminMain/AdminMain.css";
import Navbar from "../components/navbar/Navbar";


const AdminMain = () => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MTA5OTc1LCJpYXQiOjE2NjM2Nzc5NzUsImp0aSI6IjUzYTZiNmQ4YWNhNjQzODk4Nzc1MmFlMmZlYjQ0NzE1IiwidXNlcl9pZCI6Mn0.iGflXEgU-P-PGM74P7wdYUWq_TzOI8UpFoRDN6NX2uE"
    // refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2Mzc2NDM3NSwiaWF0IjoxNjYzNjc3OTc1LCJqdGkiOiJlNmQ1OWFlNDZjNGY0Mjc1YTEwMzUzM2M1OWEwOGFlMSIsInVzZXJfaWQiOjJ9.giLIPCAbdINgg93lxnLiYo37nf01Cw8K_BhGuzIgjlI"

    
    
    const [events, setevent] = useState([
    ])
    
    // axios.post('http://aleksbcg.beget.tech/api/token/',
    //     { username: "Admin", password: "Admin" }
    // ).then(response => {
    //     console.log(response.data)
    // })


    axios.get('http://aleksbcg.beget.tech/events/1', {
        headers: {
            'AUTHORIZATION':`Bearer ${token}`
        }
    }).then(response => {
        setevent([...events, response.data])
    })
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