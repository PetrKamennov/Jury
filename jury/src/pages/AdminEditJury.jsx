import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Jury from "../components/AdminEditJury/Jury";

import "../components/AdminEditJury/AdminEditJury.css";

const AdminEditJury = () => {

    const [jurys, setJury] = useState([
        { id: 1, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 2, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 3, juryname: 'Проект хуйни', job: 'Долбаеееб' },
        { id: 4, juryname: 'Проект хуйни', job: 'Долбаеееб' },
    ])

    const removeJury = (project) => {
        setJury(jurys.filter(p => p.id !== project.id))
    }

    return (
        <>
            <section className="AdminEditJury">
                <div className="AdminEditJury__pulljury">
                    {jurys.map((jurys, index) =>
                        <Jury remove={removeJury} number={index + 1} jury={jurys} key={jurys.id} />
                    )}

                </div>
                <Link to="/AdminAddJury"><button className="AdminEditJury__button">Добавить члена жюри</button></Link>
            </section>
        </>
    )
}

export default AdminEditJury