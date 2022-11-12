import axios from "axios";
import React from "react";

import "./Jury.css";

const Jury = (props, remove) => {

    async function DeleteJury(){
        props.remove(props.jury)
        axios.delete(`http://aleksbcg.beget.tech/CreteryOnEvent/${props.criteria.id}/`
        ).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }


    return (
        <div className="Jury">
            <div className="Jury__container">
                <div className="Jury__text">
                    <div className="Jury__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.jury.fio}</span>
                    </div>
                    <p>{props.jury.post}</p>
                </div>
                <button className="Jury__button" onClick={() => DeleteJury}>Удалить</button>
            </div>
        </div>
    )
}

export default Jury