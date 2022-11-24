import React from 'react';
import "../components/JuryMeet/jury_history.css"
import {useState, useEffect} from "react";
import EventProjectJury from "../components/JuryMeet/EventProjectJury";
import EventProjectHistory from "../components/JuryMeet/EventProjectHistory";
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import NavbarJury from '../components/navbar/NavbarJury';
import UpdateBut from '../components/UpdateBut/UpdateBut';
const JuryHistory = () => {

    const axiosPrivate = useAxiosPrivate()
    const [update, setUpdate] = useState(false)


    const [projects, setprojects] = useState([
    ])

    


    const auth = localStorage.getItem("user_id")
    async function getinf() {
        axiosPrivate.get(`/getEventForJury/${auth}`, {

        }).then(response => {
            setprojects(response.data)
            
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(projects)

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])





    return (
        <>
            <div className="JuriHistory">
                <section className="Jury_History_select">
                    <div className="JuryHistory__ProjektPull">
                        {projects.map((projects, index) =>
                            <EventProjectHistory number={index + 1} id={index} project={projects} key={projects.id} />
                        )}
                    </div>
                    <UpdateBut/>
                </section>
            </div>
        </>
    );
};

export default JuryHistory;