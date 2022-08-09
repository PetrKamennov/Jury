import React from "react";

import "../components/AdminAddJury/AdminAddJury.css";

const AdminAddJury = () => {
    return (
        <section className="AddJurySection">
            <h1>Добавление члена жури</h1>
            <div className="AddJurySection__pullJury">
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
                <div className="jury"></div>
            </div>
            <button>Зарегистрировать нового члена жури</button>
        </section>
    )
}

export default AdminAddJury
