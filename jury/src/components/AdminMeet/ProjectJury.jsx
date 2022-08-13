import React from "react";
import { Link } from "react-router-dom";

import "./ProjectJury.css";

const ProjectJury = (props, remove) => {


    return (
        <>
            <div className="ProjectJury">
                <div className="ProjectJury__container">
                    <div className="ProjectJury__text">
                        <div className="ProjectJury__text-spans">
                            <span>1.</span>
                            <span>Имя члена жюри</span>
                        </div>
                        <p>должность</p>
                    </div>
                    <span className="ProjectJury__indicator">Проголосовал</span>
                </div>
            </div>
        </>
    )
}

export default ProjectJury