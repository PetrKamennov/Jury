import React from "react";
import { Link } from "react-router-dom";

import "./Event.css";

const Event = (props, getId) => {

    const EventIds = "props.event.eventName";

    localStorage.setItem('id', 1);



    return (
        <>
            <div className="Event">
                <div className="Event__container">
                    <div className="Event__text">
                        <div className="Criteria__text-spans">
                            <span>{props.event.name_of_event}</span>
                        </div>
                        <p onClick={() => props.getId(props.event.eventName)}>{props.event.date_of_event}</p>
                    </div>
                    <div className="Event__buttons">
                        <Link to='/AdminMeet' onClick={() => props.getId(props.event.pk)}><button>Начать</button></Link>
                        <Link to='/AdminEditProject' onClick={() => props.getId(props.event.pk)} className="Event__button-edit"><button className="Event__button-edit">Редактировать</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event