import React from "react";

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
                        <input className="authorization__login_input" type="text" placeholder="Введите ваш логин" value={auth.login} onChange={e => setAuth({ ...auth, login: e.target.value })} />
                        <input className="authorization__password_input" type="text" placeholder="Введите ваш пароль" value={auth.password} onChange={e => setAuthor({ ...auth, password: e.target.value })} />
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