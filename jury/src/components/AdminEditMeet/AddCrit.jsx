import React from "react";
import { Link } from "react-router-dom";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./AddCrit.css";

const AddCrit = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();


    const EventId = localStorage.getItem("EventId")

    async function AddCrit() {
        axiosPrivate.post(`http://aleksbcg.beget.tech/AddCreteryOnEvent/`, {
            event: EventId,
            cretery: props.criteria.id
        }).then(response => {
            PushM()
            console.log(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
    }
    console.log(EventId)
    console.log(props.criteria.id)
    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Критерий был добавлен в проект.</p>
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
        <div className="Crit">
            <div className="Crit__container">
                <div className="Crit__text">
                    <div className="Crit__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.criteria.creteryName}</span>
                        <span>{props.criteria.id}</span>
                    </div>
                    <p>{props.criteria.creteryDescription}</p>
                </div>
                <button onClick={AddCrit} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddCrit