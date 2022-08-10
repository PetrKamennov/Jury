import React from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"


const JuryMeet = () => {

    return (
        <div className="JuryMeet">
            <div className="buttons_jury_meet">
                <Link to=""  className="jury_meet_button first_button">текущие мероприятия</Link>
                <Link to="/aboba" className="jury_meet_button scnd_button">История</Link>
                <Link to="/profile" className="jury_meet_button third_button">Профиль</Link>
            </div>
        </div>
    );
};

export default JuryMeet;