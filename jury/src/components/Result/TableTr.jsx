import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import CriteriaTable from "./CriteriaTable";




const TableTr = (props) => {
    const axiosPrivate = useAxiosPrivate();
    const [update, setUpdate] = useState(false)

    const [result, setResult] = useState([
    ])

    const EventId = localStorage.getItem("EventId")


    // async function getinf() {
    //     axiosPrivate.get(`/GetResult/${EventId}/1`, {
    //     }).then(response => {
    //         setResult(response.data)
    //         console.log(response.data)
    //     }).catch(function (error) {
    //         console.log(error);
    //     })
    // }

    const[resl, setResl]= useState();

    function resultat (){
        var res = 0;
        for (let index = 0; index < props.projets.estimations.length; index++) {
            res += props.projets.estimations[index]
            // console.log(props.projets.estimations[index])
            
        }
        if(res == NaN){
            setResl(0)
        }else{
            setResl(res)
        }
    }
    
    useEffect(() => {
        if (update) return
        // getinf()
        
        setResult(props.projets.estimations)
        resultat()
        }, [update])



    console.log(resl)
    return (
        <>

            <section className="TableTr">
                <div className="TableTr-number">{props.number}</div>
                <div className="TableTr-projectName">{props.projets.projectName}</div>
                {result.map((result, index) =>
                    <CriteriaTable result={result} number={index + 1} key={result.id} />
                )}
                <div className="TableTr-result">
                    <span>{resl}</span>
                    </div>
            </section>
        </>
    )
}

export default TableTr