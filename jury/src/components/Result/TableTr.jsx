import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CriteriaTable from "./CriteriaTable";




const TableTr = (props) => {
    const axiosPrivate = useAxiosPrivate();
    const [update, setUpdate] = useState(false)

    const [result, setResult] = useState([
    ])

    const EventId = localStorage.getItem("EventId")


    async function getinf() {
        axiosPrivate.get(`/GetResult/${EventId}/1`, {
        }).then(response => {
            setResult(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(result)


    useEffect(() => {
        if (update) return
        getinf()
        }, [update])


    return (
        <>

            <section className="TableTr">
                <div className="TableTr-number">{props.number}</div>
                <div className="TableTr-projectName">{props.projets.projectName}</div>
                {result.map((result, index) =>
                    <CriteriaTable result={result} number={index + 1} key={result.id} />
                )}
            </section>
        </>
    )
}

export default TableTr