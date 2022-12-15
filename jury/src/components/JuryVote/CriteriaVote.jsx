import React from "react";
import { useState } from "react";
import "./CriteriaVote.css";
import Info from "../JuryVote/infos.png"
import { Notification, useToaster } from "rsuite";



const CriteriaVote = (props) => {

    const EventId = localStorage.getItem('EventId')
    const projectId = localStorage.getItem("projectId")
    const auth = localStorage.getItem("user_id")

    
    const [crit, setCrit] = useState({ index: props.number, score: '1', event: EventId, project: projectId, jury: auth, creteryType: props.criteria[0].id })
    console.log(crit)

    async function postCrit(e){
        await setCrit({ ...crit, score: e.target.value })
    }
    
    if (props.active === true){
        props.gets(crit)
    }

    const toaster = useToaster();
    const info = (
        <Notification type={'info'} 
            header={'Информация'} closable>
            <p>{props.criteria[0].creteryDescription}</p>
            <br/>
            <p>Тип оценивания:</p>
            <p>{ props.criteria[0].creteryType === 1 
                        ? "Баллы"
                        : props.criteria[0].creteryType === 2
                            ? "Односложный Ответ"
                            : "Многосложный Ответ"
                }
            </p>
        </Notification>
    );
    const PushI = () => toaster.push(
        info, { placement: 'topStart' }
    )
    
    return (
        <>
            <div className="CriteriaVote">
                <div className="CritrriaVote__top">
                    <b>{props.criteria[0].creteryName}</b>
                    <button className="CriteriaVote__top_image" onClick={PushI}>
                        <img className="CriteriaVote__top_image-img" src={Info} alt="info" />
                    </button>
                </div>
                <div className="CriteriaVote__bottom">
                       { props.criteria[0].creteryType === 1 
                        ? <select name="" id="" value={crit.score} onChange={e => postCrit(e)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                         </select>
                        : props.criteria[0].creteryType === 2
                            ? <select name="" id="" value={crit.score} onChange={e => postCrit(e)}>
                            <option value={1}>да</option>
                            <option value={5}>нет</option>
                        </select>
                            : <select name="" id="" value={crit.score} onChange={e => postCrit(e)}>
                            <option value={1}>нет</option>
                            <option value={2}>скорее нет</option>
                            <option value={3}>затрудняюсь ответить</option>
                            <option value={4}>скорее да</option>
                            <option value={5}>да</option>
                        </select>}
                </div>
            </div>
        </>
    )
}

export default CriteriaVote