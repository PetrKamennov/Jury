import React from "react";
import "./CriteriaVote.css";



const CriteriaVote = (props) => {

    console.log(props.criteria)

    return (
        <>
            <div className="CriteriaVote">
                <div className="CritrriaVote__top">
                    <b>{props.criteria[0].creteryName}</b>
                </div>
                <div className="CriteriaVote__bottom">
                       { props.criteria[0].creteryType === 1 
                         ?<select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                         </select>
                        :props.criteria.creteryType === 2
                        ?<select name="" id="">
                            <option value="">да</option>
                            <option value="">нет</option>
                        </select>
                        : <select name="" id="">
                            <option value="">нет</option>
                            <option value="">скорее нет</option>
                            <option value="">затрудняюсь ответить</option>
                            <option value="">скорее да</option>
                            <option value="">да</option>
                        </select>}
                </div>
            </div>
        </>
    )
}

export default CriteriaVote