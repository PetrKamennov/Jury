import React from "react";
import axios from 'axios';
import "./addJury.css";

const AddJury = (props, remove) => {

    const EventId = localStorage.getItem("EventId")

    async function addJury() {
        axios.post(`http://aleksbcg.beget.tech/eventJury/`, {
            event: EventId,
            jury: props.jury.id
        }).then(response => {
            console.log(response.data.posts)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(props.EventId)

    return (
        <div className="Jury">
            <div className="Jury__container">
                <div className="Jury__text">
                    <div className="Jury__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.jury.last_name}</span>
                    </div>
                    <p>{props.jury.first_name}</p>
                </div>
                <button onClick={addJury} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddJury