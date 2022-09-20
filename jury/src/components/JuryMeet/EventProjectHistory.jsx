import React from 'react';
import Arrow from "../img/down-arrow 1.png";
import ProjectJury from "./ProjectJury";
import "./EventProjectHistory.css"
import {useState} from "react";
import ProjectsHistoryJury from "./ProjectsHistoryJury";




const EventProjectHistory = (props) => {

    const [EventProject__Jurrypull, setPull] = useState('EventProject__Jurrypull EventProjecthidden')
    const [EventProject__buttons_3, setEventProject__buttons_3] = useState('EventProject__buttons-3 active')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const CloseJury = () => {
        if (!isMenuClicked) {
            setPull('EventProject__Jurrypull')
            setEventProject__buttons_3("EventProject__buttons-3")
        }
        else {
            setPull('EventProject__Jurrypull EventProjecthidden')
            setEventProject__buttons_3("EventProject__buttons-3 active")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const [jurys, setjury] = useState([
        { id: 1, nameproject: 'Название проекта', participant_name: 'имя конкурсанта', ball: 'Балл:', score: '22' },
        { id: 2, nameproject: 'Название проекта', participant_name: 'имя конкурсанта', ball: 'Балл:', score: '21' },
        { id: 3, nameproject: 'Название проекта', participant_name: 'имя конкурсанта', ball: 'Балл:', score: '23' },
        { id: 4, nameproject: 'Название проекта', participant_name: 'имя конкурсанта', ball: 'Балл:', score: '44'  },
    ])

    return (
        <div className="EventProjectHistory">
            <div className="EventProject__container">
                <div className="EventProject__text">
                    <div className="EventProject__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.project.projectname}</span>
                    </div>
                    <p className="EventProject__text_p">{props.project.date}</p>
                </div>
                <img src={Arrow} alt="arrow" className={EventProject__buttons_3} onClick={CloseJury} />
            </div>
            <div className={EventProject__Jurrypull}>
                <div className="EventProject__Jurrypull-container">
                    {jurys.map((jurys, index) =>
                        <ProjectsHistoryJury number={index + 1} jury={jurys} key={jurys.id} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventProjectHistory;