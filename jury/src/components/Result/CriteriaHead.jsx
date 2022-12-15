import React from "react";
import { useState, useEffect } from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";




const CriteriaHead = (props) => {
    // const axiosPrivate = useAxiosPrivate();
    console.log(props.result)


    return (
        <>
            <div className="CriteriaHead">
                <span>{props.result[0].creteryName}</span>
            </div>
        </>
    )
}

export default CriteriaHead