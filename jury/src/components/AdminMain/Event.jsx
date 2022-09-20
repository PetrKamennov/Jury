import React from "react";
import { Link } from "react-router-dom";

import "./Event.css";

const Event = (props) => {


    return (
        <>
            <div className="Event">
                <div className="Event__container">
                    <div className="Event__text">
                        <div className="Criteria__text-spans">
                            <span>{props.event.name_of_event}</span>
                        </div>
                        <p>{props.event.date_of_event}</p>
                    </div>
                    <div className="Event__buttons">
                        <Link to='/AdminMeet'><button>Начать</button></Link>
                        <Link to='/AdminEditProject' className="Event__button-edit"><button className="Event__button-edit">Редактировать</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event