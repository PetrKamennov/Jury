import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import React from "react";
import { Link } from "react-router-dom";

import "./Event.css";

const Event = (props, getId) => {

    const axiosPrivate = useAxiosPrivate();


    const EventIds = "props.event.eventName";

    function sendID() {
        localStorage.setItem("EventId", props.event.id)
    }
    async function startEvent(){
        axiosPrivate.patch(`http://aleksbcg.beget.tech/events/${props.event.id}`,{
            eventIsStarted: true
        }).then(resp =>{
        }).catch(error => {
            console.log(error)
        })
        
    }


    return (
        <>
            <div className="Event">
                <div className="Event__container">
                    <div className="Event__text">
                        <div className="Criteria__text-spans">
                            <span>{props.event.eventName}</span>
                        </div>
                        <p>{props.event.eventDate}</p>
                    </div>
                    <div className="Event__buttons">
                        <Link to='/AdminMeet' onClick={startEvent}><button>Начать</button></Link>
                        <Link to='/AdminEditProject' onClick={sendID} className="Event__button-edit"><button className="Event__button-edit">Редактировать</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event