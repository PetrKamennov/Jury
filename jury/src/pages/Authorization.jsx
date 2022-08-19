import React from "react";

import "../components/Authorization/Authorization.css";

const Authorization = () => {


    return (
        <>
            <section className="authorization">
                <div className="authorization__block">
                    <h1>Авторизация</h1>
                    <input type="text" />
                    <input type="text" />
                    <span>Забыли пароль?</span>
                    <button>Войти</button>
                </div>
            </section>
        </>
    )
}

export default Authorization