import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import "../components/JuryVote/JuryVote.css";
import CriteriaVote from "../components/JuryVote/CriteriaVote";
import { Notification, useToaster } from "rsuite";
import { stringToObject } from "rsuite/esm/utils";



const JuryVote = () => {
    const axiosPrivate = useAxiosPrivate();

    const [criteriaScore, setCriteriaScore] = useState([])

    function arrstart( i ){
        var criteriaScore1 = new Array(i);
        setCriteriaScore(criteriaScore1)
    }

    const [update, setUpdate] = useState(false)
    const [alert, setAlert] = useState(false)
    const [criterias, setCriterias] = useState([
    ])
    const [project, setProject] = useState([
    ])
    const [err, setErr] = useState()
    const [check, setCheck] = useState('')

    const [active, setActive] = useState(false)
    

    const projectId = localStorage.getItem("projectId")
    const EventId = localStorage.getItem("EventId")
    const user_id = localStorage.getItem("user_id")


    console.log(EventId)

    async function getinf() {
        axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
        }).then(response => {
                setCriterias(response.data)  
            console.log(response.data.length)
            arrstart(response.data.length)
        }).catch(function (error) {
            console.log(error);
        })
    }
    async function getinf2() {
        axiosPrivate.get(`/projects/${projectId}`, {
        }).then(response => {
            setProject(response.data[0])
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

    const createReq = (crit) =>{
        criteriaScore.splice(crit.index, 1, crit)
        console.log(criteriaScore)
    }
    async function postinf() {
        await setActive(true);
        for (let index = 0; index < criterias.length; index++) {
            
            console.log(criteriaScore[index])
            axiosPrivate.post(`/creteryAddScore/`, {
                event: Number(criteriaScore[index].event),
                project: Number(criteriaScore[index].project),
                jury: Number(criteriaScore[index].jury),
                creteryType: Number(criteriaScore[index].creteryType),
                score: Number(criteriaScore[index].score), 
                state: true     
            }).then(response => {
                if(index === criterias.length - 1){
                    PushM()
                }
                // console.log("suck " + index)
            }).catch(async function (error) {
                if(index === criterias.length - 1){
                    if (error.response.status === 400)  
                    {PushE()}
                    else
                    {PushAllE()}
                }

                // await setErr(error.response.status);
                // const errors = 0
                // console.log(err)
                // if(err === 400){
                //     errors++
                //     setCheck(errors)
                // } else {
                //     setCheck(errors)
                // }
            })
            
        }

        localStorage.setItem(`buttonActive-${user_id}-${projectId}`, "false")

    }

    console.log(criterias)
    
    const toaster = useToaster();

    const message = (
        <Notification type={'error'} 
            header={'Упс...!'} closable>
            <p>Извините, Произошла Ошибка.</p>
            <br/>
            <p>Попробуйте ещё раз, не сдавайтесь!</p>
        </Notification>
    );

    const error = (
        <Notification type={'error'} 
            header={'Увы, но вы уже проголосовали!'} closable>
            <p>Извините, Но ваш голос уже был внесён.</p>
            <br/>
            <p>Дождитесь переголосования, чтобы снова внести свой голос!</p>
        </Notification>
    );

    const PushAllE = () => toaster.push(
        message, { placement: 'topStart' }
    )

    const PushE = () => toaster.push(
        error, { placement: 'topStart' }
    )

    const message2 = (
        <Notification type={'success'} 
            header={'Поздравляем!'} closable>
            <p>Вы успешно Проголосовали!</p>
            <br/>
            <p>Для изменения голоса дождитесь переголосования.</p>
        </Notification>
    );

    const PushM = () => toaster.push(
        message2, { placement: 'topStart' }
    )

  


    // function Allert(){
    //     postinf();
    //     const timer = setTimeout(() => {
    //         AllertNot()
    //     }, 1000)
    // }
    
    console.log(err);

    // function isErrors()
    // {
    //     console.log(err)
    //     if (err === 400)  
    //     {PushE()}
    //     else
    //     {PushAllE()}
    // }

    // function AllertNot() {
    //     {check === 0
    //         ? PushM()
    //         : isErrors()
    //     }
    // }

    useEffect(() => {
        if (update) return
        getinf()
        getinf2()
    }, [update])

    // async function Allert(){
    //     await postinf();
    //     AllertNot()
    // }


    return (
        <>

            <section className="JuryVote">
                <div className="JuryVote__container">
                    <h1>{project.projectName}</h1>
                    <p>Докладчик: {project.projectAuthor}</p>
                    <div className="JuryVote__CriteriasPull">
                        {criterias.map((criteria, index) =>
                            <CriteriaVote criteria={criteria} gets={createReq} active={active} number={index} key={criteria.id} />
                        )}
                    </div>
                    <div className="JuryVote__container__buttons">
                        <Link to='/jury_meets'><button onClick={postinf}>Отправить результаты</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JuryVote