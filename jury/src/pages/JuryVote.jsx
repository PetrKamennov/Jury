import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import "../components/JuryVote/JuryVote.css";
import CriteriaVote from "../components/JuryVote/CriteriaVote";



const JuryVote = () => {
    const axiosPrivate = useAxiosPrivate();

    const [update, setUpdate] = useState(false)
    const [criterias, setCriterias] = useState([{
        creteryName: "хуй", creteryType: 1
    },{
        creteryName: "хуй 2", creteryType: 2
        }, {
            creteryName: "хуй 3", creteryType: 3
        }, {
            creteryName: "хуй 2", creteryType: 2
        }, {
            creteryName: "хуй 3", creteryType: 3
        }, {
            creteryName: "хуй 2", creteryType: 2
        }, {
            creteryName: "хуй 3", creteryType: 3
        }, {
            creteryName: "хуй 2", creteryType: 2
        }, {
            creteryName: "хуй 3", creteryType: 3
        }
    ])


    // async function getinf() {
    //     axiosPrivate.get('/events/', {
    //     }).then(response => {
    //         setEvent(response.data)
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    // }



    // useEffect(() => {
    //     if (update) return
    //     getinf()
    // }, [update])

    // console.log(events)

    return (
        <>

            <section className="JuryVote">
                <div className="JuryVote__container">
                    <h1>Название проекта 1</h1>
                    <p>Докладчик: Имя конкурсанта</p>
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