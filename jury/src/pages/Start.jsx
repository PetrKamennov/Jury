import React from "react";
import { Link } from "react-router-dom";

import "../components/AdminMain/AdminMain.css";



const Start = () => {

    return (
        <>

            <section className="Start">
                <Link to='/AdminMain' className="navbar__button">Админка</Link>
            </section>
        </>
    )
}

export default Start