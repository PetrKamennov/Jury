import React from "react";
import { useState, useEffect } from "react";
import CriteriaHead from "../components/Result/CriteriaHead";
import TableTr from "../components/Result/TableTr";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "../components/Result/PDF.css"






const PDF = () => {
    const axiosPrivate = useAxiosPrivate();
    const [update, setUpdate] = useState(false)

    const [result, setResult] = useState([
    ])

    const [projets, setProjects] = useState([
    ])

    const EventId = localStorage.getItem("EventId")


    async function getinf() {
        axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
        }).then(response => {
            setResult(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    async function getinf2() {
        axiosPrivate.get(`/GetResult/${EventId}/1`, {

        }).then(response => {
            setProjects(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }


    const Table = document.getElementById("Table")
    console.log(Table)

    useEffect(() => {
        if (update) return
        getinf()
        getinf2()
    }, [update])


    return (
        <div id="Table" className="Result__table__pdf">
            <div className="Result__header">
                <div className="Result__header-number">
                    <span>№</span>
                </div>
                <div className="Result__header-projectName">
                    <span>Название проекта</span>
                </div>
                {result.map((result, index) =>
                    <CriteriaHead result={result} number={index + 1} key={result.id} />
                )}
                <div className="Result__header__itog">
                    <span>Итог</span>
                </div>
            </div>
            {projets.map((projets, index) =>
                <TableTr projets={projets} number={index + 1} key={result.id} />
            )}

        </div>
    )
}

export default PDF