import axios from "axios";
import React from "react";
import { Notification, useToaster } from "rsuite";
import { axiosPrivate } from "../../api/axios";

import "./Jury.css";

const Jury = (props, remove) => {

    async function DeleteJury(){
        props.remove(props.jury)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/eventJuryRed/${props.jury.juryEventId}/`,{

        }).then(response => {
            PushM()
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
            PushE()
        })
    }
    console.log(props.jury)
    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Член жюри был успешно удален.</p>
            <br/>
            <p>Обновите информацию нажав но сопутсвующую кнопку.</p>
        </Notification>
    );
    const error = (
        <Notification type={'error'} 
            header={'Упс...'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте ещё раз, не сдавайтесь!</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )

    return (
        <div className="Jury">
            <div className="Jury__container">
                <div className="Jury__text">
                    <div className="Jury__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.jury.last_name}</span>
                    </div>
                    <p>{props.jury.first_name}</p>
                </div>
                <button className="Jury__button" onClick={DeleteJury}>Удалить</button>
            </div>
        </div>
    )
}

export default Jury