import React from "react";
import axios from 'axios';
import "./AddCrit.css";

const AddCrit = (props, remove) => {

    async function AddCrit() {
        axios.post(`http://aleksbcg.beget.tech/AddCreteryOnEvent/`, {
            event: props.EventId,
            cretery: props.criteria.id
        }).then(response => {
            console.log(response.data.posts)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(props.event)

    return (
        <div className="Crit">
            <div className="Crit__container">
                <div className="Crit__text">
                    <div className="Crit__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.criteria.creteryName}</span>
                    </div>
                    <p>{props.criteria.creteryDescription}</p>
                </div>
                <button onClick={AddCrit} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddCrit