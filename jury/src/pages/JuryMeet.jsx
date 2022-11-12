import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"
import EventProjectJury from "../components/JuryMeet/EventProjectJury";
import NavbarJury from '../components/navbar/NavbarJury';
import axios from '../api/axios';



const JuryMeet = () => {

    const [update, setUpdate] = useState(false)

    const [projects, setprojects] = useState([
        { id: 1, projectname: 'Мероприятие', date: '10.08.2001' },
        { id: 2, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 3, projectname: 'Мероприятие', date: '10.08.2001'  },
        { id: 4, projectname: 'Мероприятие', date: '10.08.2001'  },
    ])

    async function getinf() {
        axios.get('http://aleksbcg.beget.tech/events/', {

        }).then(response => {
            setprojects(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    useEffect(() => {
        if (update) return
        getinf()
    }, [update])

    return (
        <>
            <NavbarJury/>
            <div className="JuryMeet">

                <section className="Jury_Meet_select">
                    <div className="JuryMeet__ProjektPull">
                        {projects.map((projects, index) =>
                            <EventProjectJury number={index + 1} project={projects} key={projects.id} />
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default JuryMeet;