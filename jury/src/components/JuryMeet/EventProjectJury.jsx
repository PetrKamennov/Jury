import React from 'react';
import ProjectJury from "./ProjectJury";
import {useState} from "react";
import Arrow from "../img/down-arrow 1.png"
import "./event_project_jury.css"
import {Link} from "react-router-dom";

const EventProjectJury = (props) => {

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
        { id: 1, juryname: 'Название проекта', job: 'имя конкурсанта', ready: 'Проголосовал'},
        { id: 2, juryname: 'Название проекта', job: 'имя конкурсанта', ready: 'Проголосовал' },
        { id: 3, juryname: 'Название проекта', job: 'имя конкурсанта', ready: 'Не проголосовал' },
        { id: 4, juryname: 'Название проекта', job: 'имя конкурсанта', ready: 'Не проголосовал' },
    ])

    return (
        <div>
            <div className="EventProjectJury">
                <div className="EventProject__container">
                    <div className="EventProject__text">
                        <div className="EventProject__text-spans">
                            <span>{props.number}.</span>
                            <Link to='/JuryVote'>{props.project.projectname}</Link>
                        </div>
                        <p className="EventProject__text_p">{props.project.date}</p>
                    </div>
                        <img src={Arrow} alt="arrow" className={EventProject__buttons_3} onClick={CloseJury} />
                </div>
                <div className={EventProject__Jurrypull}>
                    <div className="EventProject__Jurrypull-container">
                        {jurys.map((jurys, index) =>
                            <ProjectJury number={index + 1} jury={jurys} key={jurys.id} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventProjectJury;