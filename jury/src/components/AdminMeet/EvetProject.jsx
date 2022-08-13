import React from "react";
import { useState } from "react";

import "./EventProject.css";
import ProjectJury from "./ProjectJury";
import Arrow from "./img/down-arrow 1.png"

const EventProject = (props, remove) => {

    const [EventProject__Jurrypull, setPull] = useState('EventProject__Jurrypull EventProjecthidden')
    const [EventProject__text_p, setP] = useState('EventProject__text-p')
    const [EventProject__buttons_1, setEventProject__buttons_1] = useState('EventProject__buttons-1')
   

    const OpenJury = () => {
        setPull('EventProject__Jurrypull')
        setP('EventProject__text-p EventProjecthidden')
        setEventProject__buttons_1("EventProject__buttons-1 EventProjecthidden")
    }

    return (
        <>
            <div className="EventProject">
                <div className="EventProject__container">
                    <div className="EventProject__text">
                        <div className="EventProject__text-spans">
                            <span>1.</span>
                            <span>Название проекта </span>
                        </div>
                        <p className={EventProject__text_p}>Имя конкурсанта</p>
                    </div>
                    <div className="EventProject__buttons">
                        <button className={EventProject__buttons_1} onClick={OpenJury}>Начать голосование</button>
                        <button className="EventProject__buttons-2 EventProjecthidden">Назначить переголосование</button>
                        <img src={Arrow} alt="arrow" className="EventProject__buttons-3 EventProjecthidden" />
                    </div>
                </div>
                <div className={EventProject__Jurrypull}>
                    <div className="EventProject__Jurrypull-container">
                        <ProjectJury/>
                        <ProjectJury />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventProject