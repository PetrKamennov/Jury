import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import "../components/JuryVote/JuryVote.css";
import CriteriaVote from "../components/JuryVote/CriteriaVote";



const JuryVote = () => {
    const axiosPrivate = useAxiosPrivate();

    const [update, setUpdate] = useState(false)
    const [criterias, setCriterias] = useState([
    ])
    const [project, setProject] = useState([
    ])

    const projectId = localStorage.getItem("projectId")
    const EventId = localStorage.getItem("EventId")

    async function getinf() {
        axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
        }).then(response => {
                setCriterias([response.data])  
            console.log(response.data.length)
        }).catch(function (error) {
            console.log(error);
        })
    }
    async function getinf2() {
        axiosPrivate.get(`/projects/${projectId}`, {
        }).then(response => {
            setProject(response.data[0])
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    console.log(criterias)


    useEffect(() => {
        if (update) return
        getinf()
        getinf2()
    }, [update])


    return (
        <>

            <section className="JuryVote">
                <div className="JuryVote__container">
                    <h1>{project.projectName}</h1>
                    <p>Докладчик: {project.projectAuthor}</p>
                    <div className="JuryVote__CriteriasPull">
                        {criterias.map((criteria) =>
                            <CriteriaVote criteria={criteria} key={criteria.id} />
                        )}
                    </div>
                    <div className="JuryVote__container__buttons">
                        <button>Отправить результаты</button>

                    </div>
                </div>
            </section>
        </>
    )
}

export default JuryVote