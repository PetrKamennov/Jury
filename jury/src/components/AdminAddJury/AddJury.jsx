import React from "react";
import { Link } from "react-router-dom";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./addJury.css";

const AddJury = (props, remove) => {

    const EventId = localStorage.getItem("EventId")

    const axiosPrivate = useAxiosPrivate();


    async function addJury() {
        axiosPrivate.post(`http://aleksbcg.beget.tech/eventJury/`, {
            event: EventId,
            jury: props.jury.id
        }).then(response => {
            PushM()
            console.log(response.data.posts)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
    }
    console.log(props.EventId)
    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Член Жюри был успешно добавлен в мероприятие.</p>
            <br/>
            <p>Если Член Жюри не появился в списке, перезагрузите страницу.</p>
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
                <button onClick={addJury} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddJury