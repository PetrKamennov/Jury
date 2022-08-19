import React from "react";
import { Link } from "react-router-dom";

import "../components/AdminMain/AdminMain.css";



const Start = () => {

    return (
        <>

            <section className="Start">
                <Link to='/AdminMain' className="navbar__button">Админка</Link>
                <Link to='/jury_meets' className="navbar__button">Жюри</Link>
            </section>
        </>
    )
}

export default Start