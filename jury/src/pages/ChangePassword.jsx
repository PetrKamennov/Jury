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
                        <input className="change_password__login_input" type="text" placeholder="Введите ваш логин" />
                        <input className="change_password__email_input" type="text" placeholder="Введите ваш email" />
                        <Link className="goto__button_change_password" to="/EmailChange">Продолжить</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChangePassword