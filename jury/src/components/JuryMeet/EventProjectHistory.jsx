import React from 'react';
import Arrow from "../img/down-arrow 1.png";
import ProjectJury from "./ProjectJury";
import "./EventProjectHistory.css"
import {useState, useEffect} from "react";
import ProjectsHistoryJury from "./ProjectsHistoryJury";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';



const EventProjectHistory = (props) => {

    const axiosPrivate = useAxiosPrivate()
    const [update, setUpdate] = useState(false)

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
    ])

    const user_id = localStorage.getItem('user_id')

    async function getinf() {
        axiosPrivate.get(`/getHistory/${user_id}`
        ).then(response => {
            var score = Array(response.data[0].author.length)
            console.log(response.data)

            for (let index = 0; index < response.data[0].author.length; index++) {
                score[index] = { author: '', projectName: '', score: 0 };
                score[index].author = response.data[0].author[index];
                score[index].projectName = response.data[0].projects[index];
                score[index].score = response.data[0].results[index];
                console.log(response.data[0].results[index])
            }
            setjury(score)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    return (
        <div className="EventProjectHistory">
            <div className="EventProject__container">
                <div className="EventProject__text">
                    <div className="EventProject__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.project.eventName}</span>
                    </div>
                    <p className="EventProject__text_p">{props.project.eventDate}</p>
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