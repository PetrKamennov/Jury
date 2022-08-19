import React from "react";
import { useState } from "react";

import "../components/AdminMeet/AdminMeet.css";
import EventProject from "../components/AdminMeet/EvetProject";


const AdminMeet = () => {

    const [projects, setprojects] = useState([
        { id: 1, projectname: 'Проект', participant: 'студент',},
        { id: 2, projectname: 'Проект', participant: 'студент', },
        { id: 3, projectname: 'Проект', participant: 'студент', },
        { id: 4, projectname: 'Проект', participant: 'студент', },
    ])

    return (
        <>
            <section className="AdminMeet">
                <h1>Мероприятия</h1>
                <div className="AdminMeet__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProject number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
                <button>Жюри</button>
            </section>
        </>
    )
}

export default AdminMeet