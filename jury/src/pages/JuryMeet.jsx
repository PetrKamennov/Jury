import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"



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

    return (
        <div className="JuryMeet">
            <div className="buttons_jury_meet">
                <Link onClick={setMeetLine} to=""  className={meetlink}>Текущие мероприятия</Link>
                <Link onClick={setHistoryLine} to="/aboba" className={historylink}>История</Link>
                <Link onClick={setProfileLine}  to="/profile" className={profilelink}>Профиль</Link>
            </div>
        </div>
    );
};

export default JuryMeet;