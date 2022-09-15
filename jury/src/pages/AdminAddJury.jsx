import axios from "axios";
import React from "react";
import { useState } from "react";

import AddJury from "../components/AdminAddJury/AddJury";

import "../components/AdminAddJury/AdminAddJury.css";
import AdminAddJuryModal from "../components/AdminAddJury/AminAddJuryModal";
import Navbar from "../components/navbar/Navbar";

const AdminAddJury = () => {

    const [jurys, setjury] = useState([
        { id: 1, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 2, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 3, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 4, juryname: 'Проект хуйни', job: 'Долбаеееб' },
    ])

    
    
    const [modalActive, setModalActive] = useState(false);


    const createjury = (newjury) => {
        setjury([...jurys, newjury])
    }


    return (
        <>
            <Navbar/>
            <section className="AdminAddJury">
                <div className="AdminAddJury__pulljury">
                    {jurys.map((jurys, index) =>
                        <AddJury number={index + 1} jury={jurys} key={jurys.id} />
                    )}

                </div>
                <button onClick={() => setModalActive(true)}>Зарегистрировать члена жюри</button>
            </section>
            <AdminAddJuryModal create={createjury} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default AdminAddJury
