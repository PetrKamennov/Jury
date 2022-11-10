import React from "react";
import axios from 'axios';
import "./AddCrit.css";

const AddCrit = (props, remove) => {

    async function AddCrit() {
        axios.post(`http://aleksbcg.beget.tech/`, {
            eventId: props.EventId,
            names: props.criteria.name,
            descript: props.criteria.descript
        }).then(response => {
            console.log(response.data.posts)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(props.EventId)

    return (
        <div className="Crit">
            <div className="Crit__container">
                <div className="Crit__text">
                    <div className="Crit__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.criteria.name}</span>
                    </div>
                    <p>{props.criteria.descript}</p>
                </div>
                <button onClick={AddCrit} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddCrit