import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddJury from "../components/AdminAddJury/AddJury";

import "../components/AdminAddJury/AdminAddJury.css";
import AdminAddJuryModal from "../components/AdminAddJury/AminAddJuryModal";
import Navbar from "../components/navbar/Navbar";

const AdminAddJury = (props) => {

    const EventId = localStorage.getItem("EventId")

    const [jurys, setjury] = useState([
    ])

    const [update, setUpdate] = useState(false)
    
    const [modalActive, setModalActive] = useState(false);


    const createjury = (newjury) => {
        setjury([...jurys, newjury])
    }

        async function getinf() {
        axios.get(`http://aleksbcg.beget.tech/getAllUsers/`, {
        }).then(response => {
            setjury(response.data)
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
            <section className="AdminAddJury">
                <div className="AdminAddJury__pulljury">
                    {jurys.map((jurys, index) =>
                        <AddJury EventId={EventId} number={index + 1} jury={jurys} key={jurys.id} />
                    )}

                </div>
                <button onClick={() => setModalActive(true)}>Зарегистрировать члена жюри</button>
            </section>
            <AdminAddJuryModal create={createjury} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminAddJury
