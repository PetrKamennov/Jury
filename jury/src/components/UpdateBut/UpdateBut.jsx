import React from "react";
import { Link } from "react-router-dom";
import "./UpdateBut.css"

function UpdateBut() {
    const lnk = window.location.pathname
    return(
        <Link to={lnk} className="UpdateBut__Link">Обновить</Link>
    )
}

export default UpdateBut;