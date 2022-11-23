import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import "../components/JuryVote/JuryVote.css";
import CriteriaVote from "../components/JuryVote/CriteriaVote";



const JuryVote = () => {
    const axiosPrivate = useAxiosPrivate();

    const [criteriaScore, setCriteriaScore] = useState([])

    function arrstart( i ){
        var criteriaScore1 = new Array(i);
        setCriteriaScore(criteriaScore1)
    }

    const [update, setUpdate] = useState(false)
    const [criterias, setCriterias] = useState([
    ])
    const [project, setProject] = useState([
    ])

    const [active, setActive] = useState(false)
    

    const projectId = localStorage.getItem("projectId")
    const EventId = localStorage.getItem("EventId")
    const user_id = localStorage.getItem("user_id")


    console.log(EventId)

    async function getinf() {
        axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
        }).then(response => {
                setCriterias(response.data)  
            console.log(response.data.length)
            arrstart(response.data.length)
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

    const createReq = (crit) =>{
        criteriaScore.splice(crit.index, 1, crit)
        console.log(criteriaScore)
    }
    async function postinf() {
        await setActive(true);
        for (let index = 0; index < criterias.length; index++) {
            
            console.log(criteriaScore[index])
            axiosPrivate.post(`/creteryAddScore/`, {
                event: Number(criteriaScore[index].event),
                project: Number(criteriaScore[index].project),
                jury: Number(criteriaScore[index].jury),
                creteryType: Number(criteriaScore[index].creteryType),
                score: Number(criteriaScore[index].score), 
                state: true     
            }).then(response => {
                console.log("suck " + index)
            }).catch(function (error) {
                console.log(error);
            })
            
        }
        localStorage.setItem(`buttonActive-${user_id}-${projectId}`, "false")
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
                        {criterias.map((criteria, index) =>
                            <CriteriaVote criteria={criteria} gets={createReq} active={active} number={index} key={criteria.id} />
                        )}
                    </div>
                    <div className="JuryVote__container__buttons">
                        <Link to='/jury_meets'><button onClick={postinf}>Отправить результаты</button></Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default JuryVote