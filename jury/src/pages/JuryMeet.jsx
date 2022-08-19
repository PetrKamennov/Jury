import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"
import EventProjectJury from "../components/JuryMeet/EventProjectJury";



const JuryMeet = () => {


    const [projects, setprojects] = useState([
        { id: 1, projectname: 'Мероприятие', date: '10.08.2001' },
        { id: 2, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 3, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 4, projectname: 'Мероприятие', date: '10.08.2001'  },
    ])

    return (
        <div className="JuryMeet">

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