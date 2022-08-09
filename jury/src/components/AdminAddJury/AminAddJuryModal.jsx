import React from "react";

import "./AdminAddJuryModal.css";

const AdminAddJuryModal = ({active, setActive}) => {
    
    return (
        <div className={active ? "AdminAddJuryModal active" : "AdminAddJuryModal"} onClick={() => setActive(false)} >
            <div className="AdminAddJuryModal__content" onClick={e => e.stopPropagation()}>
                <h1>Регистрация жюри</h1>
                    <div className="AdminAddJuryModal__content-regJury">
                        <div className="AdminAddJuryModal__content-regJury__inputs">
                            <input type="text" className="AdminAddJuryModal__content-regJury__name" />
                            <input type="text" className="AdminAddJuryModal__content-regJury__login" />
                            <input type="text" className="AdminAddJuryModal__content-regJury__job" />
                            <input type="text" className="AdminAddJuryModal__content-regJury__password" />
                        </div>
                    <button>Зарегистрировать</button>
                    </div>
            </div>
        </div>
    )
}

export default AdminAddJuryModal