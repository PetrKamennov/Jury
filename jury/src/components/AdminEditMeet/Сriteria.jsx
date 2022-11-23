import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./Criteria.css";

const Criteria = (props) => {

    const axiosPrivate = useAxiosPrivate();

    // const id = props.criterias.id
    async function RemoveProject() {
        props.remove(props.criterias)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/CreteryOnEvent/${props.criterias[0].id}`
        ).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(props.criterias)
    const Name = props.criterias[0].creteryName
    const Descript = props.criterias[0].creteryDescription
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