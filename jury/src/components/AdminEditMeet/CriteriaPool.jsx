import React from "react";
import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./CriteriaPool.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import AddCriteriaModal from "./AddCriteriaModal";
import { useEffect } from "react";
import AddCrit from "./AddCrit";
import UpdateBut from "../UpdateBut/UpdateBut";

const CriteriaPool = (props) => {

    const axiosPrivate = useAxiosPrivate();

    const [criterias, setcriteria] = useState([
    ])
    const [modalActive, setModalActive] = useState(false);
    const createcriteria = (newcriteria) => {
        setcriteria([...criterias, newcriteria])
    }
    const [update, setUpdate] = useState(false)
    async function getcrit() {
        axiosPrivate.get(`http://aleksbcg.beget.tech/createNewCretery/`, {
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
            <div className="CriteriaPool__Buttons">
                <UpdateBut/>
                <AddCriteriaModal create={createcriteria} active={modalActive} setActive={setModalActive} />
            </div>
        </>
    )
}

export default CriteriaPool;