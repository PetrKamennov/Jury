import React from "react";
import { useState, useEffect } from "react";
import CriteriaHead from "../components/Result/CriteriaHead";
import TableTr from "../components/Result/TableTr";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import "../components/Result/Result.css"
import { Link } from "react-router-dom";
import { Notification, useToaster } from "rsuite";









const Result = () => {

    const axiosPrivate = useAxiosPrivate();
    const [update, setUpdate] = useState(false)

    const [result, setResult] = useState([
    ])

    const [projets, setProjects] = useState([
    ])

    const EventId = localStorage.getItem("EventId")

    

    async function getinf() {
        axiosPrivate.get(`/GetCreteryOnEvent/${EventId}`, {
        }).then(response => {
            setResult(response.data)
            console.log(response.data)
        }).catch(function (error) {
            console.log(error);
        })
    }

   
    async function getinf2() {
        axiosPrivate.get(`/GetResult/${EventId}/1`, {

        }).then(response => {
            var arr = []
            // console.log(response.data)
            for (let index = 0; index < response.data.length; index++) {
                var res = 0
                for (var i = 0; i < response.data[index].estimations.length; i++) {
                    res += response.data[index].estimations[i];
                }
                arr.splice(index, 0, {
                    projectAuthor: response.data[index].projectAuthor,
                    estimations: response.data[index].estimations,
                    id: response.data[index].id,
                    projectName: response.data[index].projectName, res: res
                });
            }
            arr.sort(function (a, b) { 
                return b.res - a.res });

            setProjects(arr)
            
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    const Table = document.getElementById("Table")
    // console.log(Table)

    useEffect(() => {
        if (update) return
        getinf()
        getinf2()
    }, [update])

    
    const toaster = useToaster();
    const message = (
        <Notification type={'info'} 
            header={'Информация для скачивания таблицы в PDF'} closable>
            <p>Для сохранения отчёта в формате .pdf нажмите правой кнопкой мыши на таблицу и выберите "Сохранить как PDF".</p>
            <br/>
            <p>Либо найдите кнопку скачивания в мобильном браузере в меню.</p>
        </Notification>
    );
    const PushM = () => toaster.push(
        message, { placement: 'topStart' }
    )
   

    return (
        <>

            <section className="Result">
                <div id="Table" className="Result__table">
                    <div className="Result__header">
                        <div className="Result__header-number">
                            <span>№</span>
                        </div>
                        <div className="Result__header-projectName">
                            <span>Название проекта</span>
                        </div>
                        <div className="Result__header-projectName">
                            <span>ФИО отвечающего</span>
                        </div>
                        {result.map((result, index) =>
                            <CriteriaHead result={result} number={index + 1} key={result.id} />
                        )}
                        <div className="Result__header__itog">
                            <span>Итог</span>
                        </div>
                    </div>
                    {projets.map((projets, index) =>
                        <TableTr projets={projets} number={index + 1} key={result[0].id} />
                    )}

                </div>
                <Link to="/PDF" type="button" onClick={PushM}>Создать Отчёт</Link>
            </section>
        </>
    )
}

export default Result