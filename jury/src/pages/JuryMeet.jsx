import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "../components/JuryMeet/jury_meet.css"
import EventProjectJury from "../components/JuryMeet/EventProjectJury";
import NavbarJury from '../components/navbar/NavbarJury';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import UpdateBut from '../components/UpdateBut/UpdateBut';
import { Notification, useToaster } from 'rsuite';



const JuryMeet = () => {

    const [update, setUpdate] = useState(false)

    const axiosPrivate = useAxiosPrivate();


    const [events, setevents] = useState([
    ])

    const auth = localStorage.getItem("user_id")
    async function getinf() {
        axiosPrivate.get(`/getEventForJury/${auth}`, {

        }).then(response => {
            setevents(...events, response.data)
            console.log(response.data)

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

            <div className="JuryMeet">

                <section className="Jury_Meet_select">
                    <div className="JuryMeet__ProjektPull">
                        {events.map((events, index) =>
                            <EventProjectJury number={index + 1} event={events} key={events.id} />
                        )}
                    </div>
                </section>
            </div>
        </>
    );
};

export default JuryMeet;