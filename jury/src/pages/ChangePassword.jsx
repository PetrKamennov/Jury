import React from "react"
import "../components/Authorization/ChangePassword.css"
import { Link } from "react-router-dom"


const ChangePassword = () => {


    return (
        <>
            <section className="change_password">
                <div className="change_password__block">
                    <div className="change_password__block_content">
                        <h1>Сброс пароля</h1>
                        <div className="change_password__input__box login">
                            <input className="change_password__login_input" type="text" />
                            <span>Введите ваш логин</span>
                        </div>
                        <div className="change_password__input__box email">
                            <input className="change_password__email_input" type="text" />
                            <span>Введите ваш email</span>
                        </div>
                        
                        <Link className="goto__button_change_password" to="/EmailChange">Продолжить</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePassword