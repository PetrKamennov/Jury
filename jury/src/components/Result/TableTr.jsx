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
    
    function tableCrit(){
            axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
            }).then(response => {
                var Crit = Array(response.data.length)
                for (let index = 0; index < response.data.length; index++) {
                    if (props.projets.estimations[index] === undefined) {
                        Crit[index] = 0
                    }else{
                        Crit[index] = props.projets.estimations[index]
                    }
                }
                setResult(Crit)
            }).catch(function (error) {
                console.log(error);
            })
    }
    
    useEffect(() => {
        if (update) return
        // getinf()
        
        // setResult(props.projets.estimations)
        tableCrit()
        resultat()
        }, [update])



    // console.log(props.projets)
    return (
        <>

            <section className="TableTr">
                <div className="TableTr-number">{props.number}</div>
                <div className="TableTr-projectName">{props.projets.projectName}</div>
                <div className="TableTr-projectName">{props.projets.projectAuthor}</div>
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