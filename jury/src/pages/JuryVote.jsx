import React from "react";
import { useState } from "react";

import "../components/JuryVote/JuryVote.css";
import "../components/JuryVote/Vote";
import Vote from "../components/JuryVote/Vote";


const JuryVote = () => {

    return (
        <>
            <section className="JuryVote">
                <div className="JuryVote__content_container">
                    <h1 className="JuryVote__text-h1">Название проекта 1</h1>
                    <h2 className="JuryVote__text-h2">Докладчик: Имя конкурсанта</h2>
                    <div className="Vote__pull">
                        <div className="Vote__pull_text">
                            <h3>Название критерия</h3>
                            <p>(описание критерия для понимания жюри)</p>
                        </div>
                        <div className="Vote__pull_score">
                            <Vote/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JuryVote