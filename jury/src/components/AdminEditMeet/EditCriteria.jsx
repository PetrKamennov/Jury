import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./EditCriteria.css";
import { Link } from "react-router-dom";
import Criteria from "./Сriteria";

const EditCriteria = (props, {create}) => {

    const [criteria, setCriteria] = useState({ criterianame: '', description: '' })



    async function getCriteria() {
        axios.get(`http://aleksbcg.beget.tech/criteria/`, {
        }).then(response => {
            setCriteria(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }



     const addNewCriteria = () => {
         const newCriteria = {
            ...criteria, id: Date.now()
        }
        create(newCriteria)
        setCriteria({ criterianame: '', description: '' })
    }

    async function addCriteria() {
        axios.post(`http://aleksbcg.beget.tech/cretery/`, {
            eventId: props.EventId,
            creteryName: criteria.criterianame,
            creteryDescription: criteria.description,
            creteryVal: 0
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
        <>
            <div className="EditCriteria">
                <div className="EditCriteria__container">
                    <div className="EditCriteria__text">
                        
                    </div>
                    <Link to="/CriteriaPool" className="EditCriteria__Link"><button className="EditCriteria__button" onClick={addCriteria}>Добавить</button></Link>
                </div>
            </div>
        </>
    )
}

export default EditCriteria