import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./EditCriteria.css";

const EditCriteria = (props, {create}) => {

    const [criteria, setCriteria] = useState({ criterianame: '', description: '' })


    // const addNewCriteria = () => {
    //     const newCriteria = {
    //         ...criteria, id: Date.now()
    //     }
    //     create(newCriteria)
    //     setCriteria({ criterianame: '', description: '' })
    // }

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
                        <div className="EditCriteria__text-spans">
                            <span>1.</span>
                            <input type="text" value={criteria.criterianame} onChange={e => setCriteria({ ...criteria, criterianame: e.target.value })} />
                        </div>
                        <input type="text" value={criteria.description} onChange={e => setCriteria({ ...criteria, description: e.target.value })} />
                    </div>
                    <button className="Criteria__button" onClick={addCriteria}>Добавить</button>
                </div>
            </div>
        </>
    )
}

export default EditCriteria