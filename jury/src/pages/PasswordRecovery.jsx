import React from "react";

import "../components/PasswordRecovery/PasswordRecovery.css";

const PasswordRecovery = () => {


    return (
        <>
            <section className="PasswordRecovery">
                <div className="PasswordRecovery__block">
                    <h1>Восстановление пароля</h1>
                    <input type="text" />
                    <input type="text" />
                    <span>Заявка на восстановление пароля отправлена</span>
                    <button>Отправить</button>
                </div>
            </section>
        </>
    )
}

export default PasswordRecovery