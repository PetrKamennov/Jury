import React from "react";
import { useState } from "react";

import "../components/JuryVote/JuryVote.css";
import "../components/JuryVote/Vote";


const JuryVote = () => {

    return (
        <>
            <section className="JuryVote">
                <h1>Название проекта 1</h1>
                <h2>Докладчик: Имя конкурсанта</h2>
                <div className="Vote__pull">
                    <Vote/>
                </div>
            </section>
        </>
    )
}

export default JuryVote