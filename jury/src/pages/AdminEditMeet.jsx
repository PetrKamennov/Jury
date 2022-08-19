import React from "react";
import { useState } from "react";

import "../components/AdminEditMeet/AdminEditMeet.css";
import EditCriteria from "../components/AdminEditMeet/EditCriteria";
import Criteria from "../components/AdminEditMeet/Сriteria";
import Navbar from "../components/navbar/Navbar";

const AdminEditMeet = () => {

    const [criterias, setcriteria] = useState([
        { id: 1, criterianame: 'Проект хуйни', description: 'Долбаеееб' },
        { id: 2, criterianame: 'Проект хуйни', description: 'Долбаеееб' },
        { id: 3, criterianame: 'Проект хуйни', description: 'Долбаеееб' },
        { id: 4, criterianame: 'Проект хуйни', description: 'Долбаеееб' },
    ])

    const createcriteria = (newCriteria) => {
        setcriteria([...criterias, newCriteria])
    }

    const removeProject = (criteria) => {
        setcriteria(criterias.filter(p => p.id !== criteria.id))
    }

    return (
        <>
            <Navbar/>
            <section className="AdminEditMeet">
                <div className="AdminEditMeet__firstBlock">
                    <div className="AdminEditMeet__firstBlock-container">
                        <div className="AdminEditMeet__firstBlock__left">
                            <input placeholder="Наименование проекта" type="text" />
                            <input placeholder="Дата и время проведения" type="text" />
                        </div>
                        <div className="AdminEditMeet__firstBlock__right">
                            <button>Удалить мероприятие</button>
                            <button>Добавить члена жюри</button>
                        </div>
                    </div>
                </div>
                <div className="AdminEditMeet__secondBlock">
                    <div className="AdminEditMeet__secondBlock__header">
                        <h1>Критерии оценивания</h1>
                    </div>
                    <div className="AdminEditMeet__secondBlock-container">
                        <div className="AdminEditMeet__secondBlock__criteriaPull">
                            {criterias.map((criterias, index) =>
                                <Criteria remove={removeProject} number={index + 1} criteria={criterias} key={criterias.id} />
                            )}
                        </div>
                        <EditCriteria create={createcriteria}/>
                    </div>
                </div>
                <button>Сохранить</button>
            </section>
        </>
    )
}

export default AdminEditMeet