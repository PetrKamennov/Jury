import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import "./AdminAddJuryModal.css";

const AdminAddJuryModal = ({ active, setActive, create }) => {

    const [jury, setJury] = useState({ name: '', post: '', userName: '', password: '', email: ''})

    const axiosPrivate = useAxiosPrivate();


    async function addNewJury() {
        axiosPrivate.post(`http://aleksbcg.beget.tech/createUser/`, {
                name: jury.name,
                post: jury.post,
                userName: jury.userName,
                email: "test1@mail.ru",
                password: jury.password
        }).then(response => {
            PushM()
            console.log(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
        setJury({ name: '', post: '', userName: '', password: '', email: '' })
    }

    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Аккаунт Члена Жюри был успешно создан.</p>
            <br/>
            <p>Обновите информацию нажав но сопутсвующую кнопку.</p>
        </Notification>
    );
    const error = (
        <Notification type={'error'} 
            header={'Упс...'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте ещё раз, не сдавайтесь!</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )
    
    return (
        <div className={active ? "AdminAddJuryModal active" : "AdminAddJuryModal"} onClick={() => setActive(false)} >
            <div className="AdminAddJuryModal__content" onClick={e => e.stopPropagation()}>
                <div className="AdminAddJuryModal__content-container">
                    <h1>Регистрация жюри</h1>
                            <div className="AdminAddJuryModal__content-regJury__inputs">
                                <div className="AdminAddJuryModal__content-regJury__inputs-left">
                                    <div className="AdminAddJuryModal__content-regJury__input__box">
                                        <input type="name" className="AdminAddJuryModal__content-regJury__name" value={jury.name} onChange={e => setJury({ ...jury, name: e.target.value })} />
                                        <span>Имя</span>
                                    </div>
                                    <div className="AdminAddJuryModal__content-regJury__input__box">
                                        <input type="login" className="AdminAddJuryModal__content-regJury__login" value={jury.userName} onChange={e => setJury({ ...jury, userName: e.target.value })} />
                                        <span>Логин</span>
                                    </div>
                                </div>
                                <div className="AdminAddJuryModal__content-regJury__inputs-right">
                                    <div className="AdminAddJuryModal__content-regJury__input__box">
                                        <input type="job" className="AdminAddJuryModal__content-regJury__job" value={jury.post} onChange={e => setJury({ ...jury, post: e.target.value })} />
                                        <span>Должность</span>
                                    </div>
                                    <div className="AdminAddJuryModal__content-regJury__input__box">
                                        <input type="password" className="AdminAddJuryModal__content-regJury__password" value={jury.password} onChange={e => setJury({ ...jury, password: e.target.value })} />
                                        <span>Пароль</span>
                                    </div>
                                </div>
                            </div>
                    <button disabled={!jury.name && !jury.post && !jury.userName && !jury.password || !jury.name || !jury.post || !jury.userName || !jury.password} onClick={addNewJury}>Зарегистрировать</button>
                </div>
            </div>
        </div>
    )
}

export default AdminAddJuryModal