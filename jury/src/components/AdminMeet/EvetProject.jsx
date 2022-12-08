import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import "./EventProject.css";
import ProjectJury from "./ProjectJury";
import Arrow from "./img/down-arrow 1.png"
import { axiosPrivate } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Notification, useToaster } from "rsuite";

const EventProject = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();

    const EventId = localStorage.getItem("EventId")

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
    const [jurys, setjury] = useState([])



    async function getinf() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/creteryAddScore/${props.project.id}`, {
        }).then(response => {
            setjury(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    async function postinf() {
        axiosPrivate.patch(`/projects/Change/${props.project.id}`, {
            projectState: 1
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    function check(){
        axiosPrivate.get(`http://aleksbcg.beget.tech/projects/${props.project.id}`, {
        }).then(response => {
            var aaa = response.data
            if (aaa[0].projectState === 1){
                setPull('EventProject__Jurrypull')
                setP('EventProject__text-p EventProjecthidden')
                setEventProject__buttons_1("EventProject__buttons-1 EventProjecthidden")
                setEventProject__buttons_2("EventProject__buttons-2")
                setEventProject__buttons_3("EventProject__buttons-3")
                setEventProject__buttons('EventProject__buttons active')
            }
            console.log(aaa)
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    const OpenJury = () => {
        setPull('EventProject__Jurrypull')
        setP('EventProject__text-p EventProjecthidden')
        setEventProject__buttons_1("EventProject__buttons-1 EventProjecthidden")
        setEventProject__buttons_2("EventProject__buttons-2")
        setEventProject__buttons_3("EventProject__buttons-3")
        setEventProject__buttons('EventProject__buttons active')
        getinf()
        postinf()
    }

    function renegotiation(){
        axiosPrivate.delete(`/creteryAddScore/${props.project.id}`, {
        }).then(response => {
            PushM()
            // setjury(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
        getinf()
    }

    useEffect(() => {
        if (update) return
        check()
    }, [update])

    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Переголосование назначено!</p>
        </Notification>
    );
    const error = (
        <Notification type={'error'} 
            header={'Упс...'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте ещё раз, не сдавайтесь!</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )

    return (
        <>
            <div className="EventProject">
                <div className="EventProject__container">
                    <div className="EventProject__text">
                        <div className="EventProject__text-spans">
                            <span>{props.number}</span>
                            <span className="EventProject__txt-span">{props.project.projectName}</span>
                        </div>
                        <p className={EventProject__text_p}>{props.project.projectAuthor}</p>
                    </div>
                    <div className={EventProject__buttons}>
                        <button className={EventProject__buttons_1} onClick={OpenJury}>Начать голосование</button>
                        <button className={EventProject__buttons_2} onClick={renegotiation}>Назначить переголосование</button>
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