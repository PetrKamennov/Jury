import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarJury.css";

const NavbarJury = () => {
    const [navbar__line__AdminEditProject, setLine1Class] = useState("navbar__line-AdminEditProject")
    const [navbar__line__AdminEditJury, setLine2Class] = useState("navbar__line-AdminEditJury")
    const [navbar__line__AdminEditMeet, setLine3Class] = useState("navbar__line-AdminEditMeet")


    const AdminEditProjectPage = () => {
        setLine1Class("navbar__line-AdminEditProject active")
        setLine2Class("navbar__line-AdminEditJury")
        setLine3Class("navbar__line-AdminEditMeet")
    }
    const AdminEditJuryPage = () => {
        setLine1Class("navbar__line-AdminEditProject")
        setLine2Class("navbar__line-AdminEditJury active")
        setLine3Class("navbar__line-AdminEditMeet")
    }
    const AdminEditMeetPage = () => {
        setLine1Class("navbar__line-AdminEditProject")
        setLine2Class("navbar__line-AdminEditJury")
        setLine3Class("navbar__line-AdminEditMeet active")
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar__buttons">
                    <Link to='/jury_meets' className="navbar__button" onClick={AdminEditProjectPage}>Текущие мероприятия</Link>
                    <Link to='/history' className="navbar__button" onClick={AdminEditJuryPage}>История</Link>
                    <Link to='/profile' className="navbar__button" onClick={AdminEditMeetPage}>Профиль</Link>
                </div>
                <hr className="navbar__line"/>
            </div>
        </>
    )
}

export default NavbarJury