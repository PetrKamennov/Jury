import React from 'react';
import "../components/JuryMeet/jury_profile.css"
import {Link} from "react-router-dom";
const JuriProfile = () => {
    return (
        <div className="JuryProfile">
            <div className="first_block_profile">
                <div className="your_photo"></div>
                <div className="inputs_FIO">
                    <input placeholder="Имя" className="data_inp name_inp"/>
                    <input placeholder="Фамилия" className="data_inp surname_inp"/>
                    <input placeholder="Отчество (при наличии)" className="data_inp patronymic_inp"/>
                </div>
            </div>
            <div className="block_jury_profile_butts">
                <div className="butts_jury_block photo_butts">
                    <Link to="" className="butt_jury_profile give_photo">Добавить фото</Link>
                    <Link to="" className="butt_jury_profile send_photo">Отправить фото</Link>
                </div>
                <div className="butts_jury_block data_butts">
                    <Link to="" className="butt_jury_profile change_password">Сменить пароль</Link>
                    <Link to="" className="butt_jury_profile change_login">Сменить логин</Link>
                </div>
            </div>
            <div className="save_your_profile">
                <Link to="" className="butt_jury_profile save_profile">Подтвердить</Link>
            </div>
        </div>
    );
};

export default JuriProfile;