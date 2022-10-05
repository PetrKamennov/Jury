import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

import "./AdminAddJuryModal.css";

const AdminAddJuryModal = ({ active, setActive, create }) => {

    const [jury, setJury] = useState({ juryname: '', job: '', login: '', password: '' })


    async function addNewJury() {
        axios.post(`http://aleksbcg.beget.tech/jury/`, {
                fio: jury.juryname,
                post: jury.job,
                login: jury.login,
                password: jury.password
        }).then(response => {
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    return (
        <div className={active ? "AdminAddJuryModal active" : "AdminAddJuryModal"} onClick={() => setActive(false)} >
            <div className="AdminAddJuryModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminAddJuryModal__content-container">
                    <h1>Регистрация жюри</h1>
                            <div className="AdminAddJuryModal__content-regJury__inputs">
                                <div className="AdminAddJuryModal__content-regJury__inputs-left">
                            <input placeholder="Имя " type="text" className="AdminAddJuryModal__content-regJury__name" value={jury.juryname} onChange={e => setJury({ ...jury, juryname: e.target.value })} />
                            <input placeholder="Логин " type="text" className="AdminAddJuryModal__content-regJury__login" value={jury.login} onChange={e => setJury({ ...jury, login: e.target.value })} />
                                </div>
                                <div className="AdminAddJuryModal__content-regJury__inputs-right">
                            <input placeholder="Должность" type="text" className="AdminAddJuryModal__content-regJury__job" value={jury.job} onChange={e => setJury({ ...jury, job: e.target.value })} />
                            <input placeholder="Пароль" type="text" className="AdminAddJuryModal__content-regJury__password" value={jury.password} onChange={e => setJury({ ...jury, password: e.target.value })} />
                                </div>
                            </div>
                    <button onClick={addNewJury}>Зарегистрировать</button>
                </div>
            </div>
        </div>
    )
}

export default AdminAddJuryModal