import React from 'react';
import "../components/JuryMeet/jury_profile.css"
import {Link} from "react-router-dom";
import NavbarJury from '../components/navbar/NavbarJury';
const JuriProfile = () => {
    return (
        <>
            <NavbarJury/>
            <div className="JuryProfile">
                <section className="white_block">
                <div className="main_block_profile">
                    <div className="block_of_profile first_block_prof">
                        <div className="your_photo"></div>
                        <div className="butts_jury_block photo_butts">
                            <Link to="" className="butt_edit_profile give_photo">Добавить фото</Link>
                            <Link to="" className="butt_edit_profile delete_photo">Удалить фото</Link>
                        </div>
                    </div>
                    <div className="block_of_profile scnd_block_prof">
                        <div className="inputs_FIO">
                            <div>
                                <h4 className="placeholder_for_input">Имя</h4>
                                <input  className="data_inp name_inp"/>
                            </div>
                            <div>
                                <h4 className="placeholder_for_input">Фамилия</h4>
                                <input className="data_inp surname_inp"/>
                            </div>
                            <div>
                                <h4 className="placeholder_for_input">Отчество (при наличии)</h4>
                                <input className="data_inp patronymic_inp"/>
                            </div>
                        </div>
                        <div className="butts_jury_block data_butts">
                            <Link to="" className="butt_jury_profile change_password_profile">Сменить пароль</Link>
                            <Link to="" className="butt_jury_profile change_login_profile">Сменить логин</Link>
                        </div>
                    </div>
                    <div className="block_of_profile third_block_prof">
                        <div>
                            <h4 className="placeholder_for_input">Должность</h4>
                            <input  className="data_inp post_inp"/>
                        </div>
                        <div>
                            <h4 className="placeholder_for_input">Логин</h4>
                            <input className="data_inp login_inp"/>
                        </div>
                    </div>
                </div>
                <div className="save_your_profile">
                    <Link to="" className="save_profile">Сохранить</Link>
                </div>
                </section>
            </div>
        </>
    );
};

export default JuriProfile;