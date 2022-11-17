import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "./EventProject.css";
import ProjectJury from "./ProjectJury";
import Arrow from "./img/down-arrow 1.png"

const EventProject = (props, remove) => {

    const [EventProject__Jurrypull, setPull] = useState('EventProject__Jurrypull EventProjecthidden')
    const [EventProject__text_p, setP] = useState('EventProject__text-p')
    const [EventProject__buttons_1, setEventProject__buttons_1] = useState('EventProject__buttons-1')
    const [EventProject__buttons_2, setEventProject__buttons_2] = useState('EventProject__buttons-2 EventProjecthidden')
    const [EventProject__buttons_3, setEventProject__buttons_3] = useState('EventProject__buttons-3 EventProjecthidden')
    const [EventProject__buttons, setEventProject__buttons] = useState('EventProject__buttons')
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [update, setUpdate] = useState(false)

    const CloseJury = () => {
        if (!isMenuClicked) {
            setPull('EventProject__Jurrypull')
            setEventProject__buttons_3("EventProject__buttons-3")
            setEventProject__buttons('EventProject__buttons active')
        }
        else {
            setPull('EventProject__Jurrypull EventProjecthidden')
            setEventProject__buttons_3("EventProject__buttons-3 active")
            setEventProject__buttons('EventProject__buttons active')
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const OpenJury = () => {
        setPull('EventProject__Jurrypull')
        setP('EventProject__text-p EventProjecthidden')
        setEventProject__buttons_1("EventProject__buttons-1 EventProjecthidden")
        setEventProject__buttons_2("EventProject__buttons-2")
        setEventProject__buttons_3("EventProject__buttons-3")
        setEventProject__buttons('EventProject__buttons active')
    }

    const [jurys, setjury] = useState([
    ])

    const EventId = localStorage.getItem("EventId")

    async function getinf() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/juryGolInfo/${EventId}`, {
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
    console.log(props.jurys)

    return (
        <>
            <div className="EventProject">
                <div className="EventProject__container">
                    <div className="EventProject__text">
                        <div className="EventProject__text-spans">
                            <span>{props.number}</span>
                            <span>{props.project.projectName}</span>s
                        </div>
                        <p className={EventProject__text_p}>{props.project.projectAuthor}</p>
                    </div>
                    <div className={EventProject__buttons}>
                        <button className={EventProject__buttons_1} onClick={OpenJury}>Начать голосование</button>
                        <button className={EventProject__buttons_2}>Назначить переголосование</button>
                        <img src={Arrow} alt="arrow" className={EventProject__buttons_3} onClick={CloseJury} />
                    </div>
                </div>
                <div className={EventProject__Jurrypull}>
                    <div className="EventProject__Jurrypull-container">
                        {jurys.map((jurys, index) =>
                            <ProjectJury number={index + 1} jury={jurys} key={jurys.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventProject