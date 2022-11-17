import React from "react"
import "../components/Authorization/EmailChange.css"
import { Link } from "react-router-dom"


const EmailChange = () => {


    return (
        <>
            <section className="email_change">
                <div className="email_change__block">
                    <div className="email_change__block_content">
                        <h1>Сброс пароля</h1>
                        <p>Заявка на восстановление пароля отправлена.</p>
                        <Link className="goto__button_email_change" to="/login">Авторизироваться</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EmailChange