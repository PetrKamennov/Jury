import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

import "./AddCriteriaModal.css";

const AddCriteriaModal = ({ active, setActive, create }) => {

    const [crit, setCrit] = useState({ creteryName: '', creteryDescription: '', creteryType: ''})


    async function addNewCriteria() {
        axios.post(`http://aleksbcg.beget.tech/createNewCretery/`, {
            creteryName: crit.creteryName,
            creteryDescription: crit.creteryDescription,
            creteryType: crit.creteryType
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    return (
        <div className={active ? "AddCriteriaModal active" : "AddCriteriaModal"} onClick={() => setActive(false)} >
            <div className="AddCriteriaModal__content" onClick={e => e.stopPropagation()}>
                <div className="AddCriteriaModal__content-container">
                    <h1>Установка Критерия</h1>
                            <div className="AddCriteriaModal__content-regJury__inputs">
                                <div className="AddCriteriaModal__content-regJury__inputs-left">
                            <input placeholder="Наименование Критерия" type="text" className="AddCriteriaModal__content-regJury__name" value={crit.creteryName} onChange={e => setCrit({ ...crit, creteryName: e.target.value })}/>
                            <input placeholder="Описание Критерия " type="text" className="AddCriteriaModal__content-regJury__login" value={crit.creteryDescription} onChange={e => setCrit({ ...crit, creteryDescription: e.target.value })}/>
                                </div>
                                <div className="AddCriteriaModal__content-regJury__inputs-right">
                            <h5> Выберите Тип оценивания:
                                <select placeholder="Тип оценивания" className="AddCriteriaModal__content-regJury__job" value={crit.creteryType} onChange={e => setCrit({ ...crit, creteryType: e.target.value })}>
                                    <option value={1}>Баллы</option>
                                    <option value={2}>Односложный</option>
                                    <option value={3}>Многосложный</option>
                                </select>
                            </h5>
                                </div>
                            </div>
                    <button onClick={addNewCriteria}>Установить</button>
                </div>
            </div>
        </div>
    )
}

export default AddCriteriaModal