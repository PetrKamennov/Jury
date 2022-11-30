import React from "react";
import { useRef, useState, useEffect } from 'react';
import AuthContext from "../content/AuthProvider";
import "../components/Authorization/Authorization.css";
import axios from "../api/axios";
import jwt_decode from 'jwt-decode';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Notification, useToaster } from "rsuite";

const LOGIN_URL = '/api/token/';

const Authorization = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setUser('')
            setPwd('')
            const response = await axios.post(LOGIN_URL,
                {
                    username: user,
                    password: pwd
                },
                // {
                //     headers: { 'Content-Type': 'application/json' },
                //     withCredentials: true
                // }
            );
            console.log(JSON.stringify(response.data));
            //console.log(JSON.stringify(response));
            const refreshToken = response.data.refresh
            const accessToken = response.data.access
            const roles = response.data.is_superuser
            const decoded = jwt_decode(accessToken)
            localStorage.setItem("refreshToken", response.data.refresh);
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("roles", response.data.is_superuser);
            localStorage.setItem("user_id", decoded.user_id)
            localStorage.setItem("user", user)
            localStorage.setItem("pwd", pwd)
            // console.log(decoded.user_id)
            // setAuth({ user, pwd, roles, accessToken, refreshToken, user_id: decoded.user_id });
            setAuth({ refreshToken: localStorage.getItem("refreshToken"), accessToken: localStorage.getItem("accessToken"), roles: Boolean(localStorage.getItem("roles")), user_id: Number(localStorage.getItem("user_id")), user: localStorage.getItem("user"), pwd: localStorage.getItem("pwd") })
            console.log(refreshToken)
            
            setUser('');
            setPwd('');
            if (roles === true){
                navigate("/adminMain")
            }else if (roles === false){
                navigate("/jury_meets")
            }else{
                navigate(from, { replace: true });
                
            }
        } catch (err) {
            console.log(err)
            PushE()
            // if (!err.response) {
                //     setErrMsg('No Server Response');
                // } else if (err.response.status === 400) {
                    //     setErrMsg('Missing Username or Password');
                    // } else if (err.response.status === 401) {
                        //     setErrMsg('Unauthorized');
                        // } else {
                            //     setErrMsg('Login Failed');
                            // }
                            // errRef.current.focus();
                        }
                    }
                    
                    const toaster = useToaster();
                    const error = (
                        <Notification type={'error'} 
                        header={'Упс...'} closable>
            <p>Данного Пользователя Не существует.</p>
            <p>Попробуйте ещё раз, людям свойственно забывать!</p>
        </Notification>
    );
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
        )
        
        
        return (
            <>
            <section className="authorization">
                <div className="authorization__block">
                    <div className="authorization__block_content">
                        <h1>Вход</h1>
                        <form >

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
                            <button onClick={handleSubmit} className="goto__button">Продолжить</button>
                        </form>
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