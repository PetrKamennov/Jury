import React from "react";
import { useState, useEffect } from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";




const CriteriaHead = (props) => {
    // const axiosPrivate = useAxiosPrivate();


    return (
        <>
            <div className="CriteriaHead">
                <span>{`Критерий ${props.number}`}</span>
            </div>
        </>
    )
}

export default CriteriaHead