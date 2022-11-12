import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import "./Criteria.css";

const Criteria = (props, remove) => {

    async function RemoveProject() {
        props.remove(props.criteria)
        axios.delete(`http://aleksbcg.beget.tech/CreteryOnEvent/${props.criteria.CreteryIdIbTable}`
        ).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    console.log(props.criteria.id)

    return (
        <>
            <div className="Criteria">
                <div className="Criteria__container">
                    <div className="Criteria__text">
                        <div className="Criteria__text-spans">
                            <span>{props.number}.</span>
                            <span>{props.criteria.creteryName}</span>
                        </div>
                        <p>{props.criteria.creteryDescription}</p>
                    </div>
                    <button className="Criteria__button" onClick={RemoveProject}>Удалить</button>
                </div>
            </div>
        </>
    )
}

export default Criteria