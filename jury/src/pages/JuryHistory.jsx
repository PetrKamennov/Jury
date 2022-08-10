import React from 'react';
import "../components/JuryMeet/jury_history.css"
const JuryHistory = () => {
    return (
        <div className="JuriHistory">
            <div className="central_part_selectors">
            <select className="selector_jury_history first_select">
                <option className="main_option_mp">
                    <h2>Мероприятие</h2>
                    <h3>Дата и время</h3>
                </option>
                <option>Чарка</option>

            </select>
            </div>
        </div>
    );
};

export default JuryHistory;