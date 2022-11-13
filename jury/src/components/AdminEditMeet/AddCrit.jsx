import React from "react";
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
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }
    console.log(EventId)
    console.log(props.criteria.id)

    return (
        <div className="Crit">
            <div className="Crit__container">
                <div className="Crit__text">
                    <div className="Crit__text-spans">
                        <span>{props.number}.</span>
                        <span>{props.criteria.creteryName}</span>
                    </div>
                    <p>{props.criteria.creteryDescription}</p>
                </div>
                <button onClick={AddCrit} className="Jury__button">Добавить</button>
            </div>
        </div>
    )
}

export default AddCrit