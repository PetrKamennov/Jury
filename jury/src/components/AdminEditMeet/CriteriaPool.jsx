import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./CriteriaPool.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import AddCriteriaModal from "./AddCriteriaModal";
import { useEffect } from "react";
import AddCrit from "./AddCrit";

const CriteriaPool = (props) => {
    const [criterias, setcriteria] = useState([
    ])
    const [modalActive, setModalActive] = useState(false);
    const createcriteria = (newcriteria) => {
        setcriteria([...criterias, newcriteria])
    }
    const [update, setUpdate] = useState(false)
    async function getcrit() {
        axios.get(`http://aleksbcg.beget.tech/createNewCretery/`, {
        }).then(response => {
            setcriteria(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getcrit()
    }, [update])
    
    const EventId = localStorage.getItem("EventId")


    return(
        <>
            <section className="CriteriaPool">
                <div className="CriteriaPool__pullcrit">
                    {criterias.map((criterias, index) =>
                        <AddCrit number={index + 1} criteria={criterias} key={criterias.id} />
                    )}
                </div>
                <button className="CriteriaPool__button" onClick={() => setModalActive(true)}>Установить Критерий</button>
            </section>
            <AddCriteriaModal create={createcriteria} active={modalActive} setActive={setModalActive} />
        </>
    )
}

export default CriteriaPool;