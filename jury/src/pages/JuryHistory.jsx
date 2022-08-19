import React from 'react';
import "../components/JuryMeet/jury_history.css"
import {useState} from "react";
import EventProjectJury from "../components/JuryMeet/EventProjectJury";
import EventProjectHistory from "../components/JuryMeet/EventProjectHistory";
const JuryHistory = () => {

    const [projects, setprojects] = useState([
        { id: 1, projectname: 'Мероприятие', date: '10.08.2001' },
        { id: 2, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 3, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 4, projectname: 'Мероприятие', date: '10.08.2001'  },
    ])

    return (
        <div className="JuriHistory">
            <section className="Jury_History_select">
                <div className="JuryHistory__ProjektPull">
                    {projects.map((projects, index) =>
                        <EventProjectHistory number={index + 1} project={projects} key={projects.id} />
                    )}
                </div>
            </section>
        </div>
    );
};

export default JuryHistory;