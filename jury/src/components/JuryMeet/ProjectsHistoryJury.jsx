import React from 'react';
import "./ProjectJury.css"
const ProjectsHistoryJury = (props) => {
    return (
        <div className="ProjectsHistoryJury">
            <div className="ProjectJury">
                <div className="ProjectJury__container">
                    <div className="ProjectJury__text">
                        <div className="ProjectJury__text-spans">
                            <span>{props.number}.</span>
                            <span>{props.jury.nameproject}</span>
                        </div>
                        <p>{props.jury.participant_name}</p>
                    </div>
                    <div className="score_block">
                    <span className="ProjectJury__indicator">{props.jury.ball}</span>
                    <span className="ProjectJury__indicator">{props.jury.score}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsHistoryJury;