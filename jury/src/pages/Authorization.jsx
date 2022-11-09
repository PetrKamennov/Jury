import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../components/Authorization/Authorization.css";

const Authorization = () => {

    const [auth, setAuth] = useState({login: '', password: ''})

    const [author, setAuthor] = useState('/')

    return (
        <>
            <section className="authorization">
                <div className="authorization__block">
                    <div className="authorization__block_content">
                        <h1>Вход</h1>
                        <div className="authorization__input__box login">
                            <input className="authorization__login_input" type="login" value={auth.login} onChange={e => setAuth({ ...auth, login: e.target.value })} />
                            <span>Введите ваш логин</span>
                        </div>
                        <div className="authorization__input__box password">
                            <input className="authorization__password_input" type="password" value={auth.password} onChange={e => setAuthor({ ...auth, password: e.target.value })} />
                            <span>Введите ваш пароль</span>
                        </div>
                        <Link className="goto__button" to={author}>Продолжить</Link>
                        <div className="authorization__block_bottom">
                            <span>Забыли пароль?</span>
                            <Link className="goto__change_password" to="/ChangePassword">Восстановить</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authorization