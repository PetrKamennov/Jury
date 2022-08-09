import React from "react";
import { useState } from "react";

import "../components/AdminAddJury/AdminAddJury.css";
import AdminAddJuryModal from "../components/AdminAddJury/AminAddJuryModal";

const AdminAddJury = () => {

    const [modalActive, setModalActive] = useState(true);

    return (
        <>
        <section className="AddJurySection">
            <h1>Добавление члена жури</h1>
            <div className="AddJurySection__pullJury">
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
            </div>
            <button>Зарегистрировать нового члена жури</button>
        </section>
        <AdminAddJuryModal active={modalActive} setActive={setModalActive}/>
        </>
    )
}

export default AdminAddJury
