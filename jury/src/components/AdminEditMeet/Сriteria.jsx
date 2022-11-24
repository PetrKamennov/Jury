import React from "react";
import { useState, useEffect } from "react";
import { Notification, useToaster } from "rsuite";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import "./Criteria.css";

const Criteria = (props, remove) => {

    const axiosPrivate = useAxiosPrivate();


    async function RemoveProject() {
        props.remove(props.criterias)
        axiosPrivate.delete(`http://aleksbcg.beget.tech/CreteryOnEvent/${props.criterias[0].id}/`
        ).then(response => {
            PushM()
            console.log(response.data)
        }).catch(function (error) {
            PushE()
            console.log(error);
        })
    }
    console.log(props.criterias)
    const Name = props.criterias[0].creteryName
    const Descript = props.criterias[0].creteryDescription
    const toaster = useToaster();
    const message = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Критерий был успешно удален!</p>
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
        <>
            <div className="Criteria">
                <div className="Criteria__container">
                    <div className="Criteria__text">
                        <div className="Criteria__text-spans">
                            <span>{props.number}.</span>
                            <span>{Name}</span>
                        </div>
                        <p>{Descript}</p>
                    </div>
                    <button className="Criteria__button" onClick={RemoveProject}>Удалить</button>
                </div>
            </div>
        </>
    )
}

export default Criteria