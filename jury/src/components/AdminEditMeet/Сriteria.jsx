import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./Criteria.css";

const Criteria = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();


    async function RemoveProject() {
        props.remove(props.criterias)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/CreteryOnEvent/${props.criteria.CreteryIdIbTable}`
        ).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    const Name = props.criterias.creteryName
    const Descript = props.criterias.creteryDescription
    return (
        <>
            <div className="Criteria">
                <div className="Criteria__container">
                    <div className="Criteria__text">
                        <div className="Criteria__text-spans">
                            <span>{props.number}.</span>
                            <span>{Name}</span>
                        </div>
                        <p>{Descript}</p>
                    </div>
                    <button className="Criteria__button" onClick={RemoveProject}>Удалить</button>
                </div>
            </div>
        </>
    )
}

export default Criteria