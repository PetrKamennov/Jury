import React from "react";
import { useRef, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../content/AuthProvider";
import "../components/Authorization/Authorization.css";
import axios from "axios";
import jwt_decode from 'jwt-decode'

const LOGIN_URL = '/auth';

const Authorization = () => {

    // const [auth, setAuthor] = useState({login: '', password: ''})


    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://aleksbcg.beget.tech/api/token/`,
                {
                    username: user,
                    password: pwd
                }
            );
            // console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response.data));

            const accessToken = response.data.access;

            

            const decoded = jwt_decode(response.data.access);
            console.log(accessToken)

            axios.get(`http://aleksbcg.beget.tech/getUser/${decoded.user_id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(response => { console.log(response.data)
            })
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
             console.log(decoded);
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
        }
    }


    return (
        <>
            <section className="authorization">
                <div className="authorization__block">
                    <div className="authorization__block_content">
                        <h1>Вход</h1>
                        <form onSubmit={handleSubmit}>

                        <div className="authorization__input__box login">
                                <input className="authorization__login_input" type="login" id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required />
                            <span>Введите ваш логин</span>
                        </div>
                        <div className="authorization__input__box password">
                                <input className="authorization__password_input" type="password"
                                    id="text"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required />
                            <span>Введите ваш пароль</span>
                        </div>
                        <button className="goto__button">Продолжить</button>
                        <div className="authorization__block_bottom">
                            <span>Забыли пароль?</span>
                            <Link className="goto__change_password" to="/ChangePassword">Восстановить</Link>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Authorization