import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"
import EventProjectJury from "../components/JuryMeet/EventProjectJury";



const JuryMeet = () => {

    const [meetlink,setLineMeet] = useState("jury_meet_button")
    const [historylink,setLineHistory] = useState("jury_meet_button")
    const [profilelink,setLineProfile] = useState("jury_meet_button")

    const setMeetLine = () => {
        setLineMeet("jury_meet_button activeBTN")
        setLineHistory("jury_meet_button")
        setLineProfile("jury_meet_button")
    }
    const setHistoryLine = () => {
        setLineMeet("jury_meet_button")
        setLineHistory("jury_meet_button activeBTN")
        setLineProfile("jury_meet_button")
    }
    const setProfileLine = () => {
        setLineMeet("jury_meet_button")
        setLineHistory("jury_meet_button")
        setLineProfile("jury_meet_button activeBTN")
    }

    const [projects, setprojects] = useState([
        { id: 1, projectname: 'Проект', participant: 'студент',},
        { id: 2, projectname: 'Проект', participant: 'студент', },
        { id: 3, projectname: 'Проект', participant: 'студент', },
        { id: 4, projectname: 'Проект', participant: 'студент', },
    ])

    return (
        <div className="JuryMeet">
            <div className="buttons_jury_meet">
                <Link onClick={setMeetLine} to=""  className={meetlink}>Текущие мероприятия</Link>
                <Link onClick={setHistoryLine} to="/aboba" className={historylink}>История</Link>
                <Link onClick={setProfileLine}  to="/profile" className={profilelink}>Профиль</Link>
            </div>
            <section className="Jury_Meet_select">
                <div className="JuryMeet__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProjectJury number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
            </section>
        </div>
    );
};

export default JuryMeet;