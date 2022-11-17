import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const url = window.location.href

const Navbar = () => {
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
                    <Link to='/AdminEditProject' className="navbar__button" onClick={AdminEditProjectPage}>Проекты</Link>
                    <Link to='/AdminEditJury' className="navbar__button" onClick={AdminEditJuryPage}>Жюри</Link>
                    <Link to='/AdminEditMeet' className="navbar__button" onClick={AdminEditMeetPage}>Информация</Link>
                </div>
                <hr className="navbar__line"/>
            </div>
        </>
    )
}

export default Navbar